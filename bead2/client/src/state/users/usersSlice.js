import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: { user: null, token: null },
  reducers: {
    login: (state, { payload: { user, accessToken: token } }) => {
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});


export const { login, logout } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;

export const selectCurrentUser = (state) => state.users.user;
export const selectToken = (state) => state.users.token;