import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  solution: [],
  table: [],
};

export const CELL_STATE = {
  EMPTY: 0,
  SELECTED: 1,
  DESELECTED: 2,
};

const graphiLogicSlice = createSlice({
  name: "graphiLogic",
  initialState,
  reducers: {
    start: (state, { payload }) => {
      state.solution = payload.map((line) =>
        line.split("").map((c) => c === "#")
      );
      state.table = state.solution.map((row) =>
        row.map(() => CELL_STATE.EMPTY)
      );
    },
    toggleCell: (state, { payload: { x, y } }) => {
      state.table[y][x] = (state.table[y][x] + 1) % 3;
    },
  },
});

export const { start, toggleCell } = graphiLogicSlice.actions;
export default graphiLogicSlice;

export const selectTable = (state) => {
  const { solution, table } = state;
  const leftNumbers = solution.map((row) => {
    row
      .map((b) => (b ? "#" : " "))
      .join("")
      .trim()
      .split(" ")
      .map((s) => s.length);
  });
  const upperNumbers = solution[0]
    ? solution[0].map((_, i) =>
        solution
          .map((row) => (row[i] ? "#" : " "))
          .join("")
          .trim()
          .split(" ")
          .map((s) => s.length)
      )
    : [];

  return {
    leftNumbers,
    upperNumbers,
    table,
  };
};
