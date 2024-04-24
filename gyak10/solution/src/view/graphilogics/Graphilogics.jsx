import { useDispatch, useSelector } from "react-redux";
import {
  CELL_STATE,
  selectTable,
  toggleCell,
} from "../../state/graphiLogicSlice";

const getClassName = (value) => {
  switch (value) {
    case CELL_STATE.SELECTED:
      return "fekete";
    case CELL_STATE.EMPTY:
      return "feher";
    case CELL_STATE.DESELECTED:
      return "szurke";
  }
};

function GraphiLogics() {
  const dispatch = useDispatch();
  const { upperNumbers, leftNumbers, table } = useSelector(selectTable);

  const upperNumbersDom = (
    <table id="felso">
      <tbody>
        <tr>
          {upperNumbers.map((col, colIndex) => (
            <td key={colIndex}>
              {col.map((n, nIndex) => (
                <span key={nIndex}>{n}</span>
              ))}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );

  const leftNumbersDom = (
    <table id="bal">
      <tbody>
        {leftNumbers.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>
              {row.map((m, mIndex) => (
                <span key={mIndex}>{m}</span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const tableDom = (
    <table id="tabla">
      <tbody>
        {table.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((value, colIndex) => (
              <td
                key={colIndex}
                className={getClassName(value)}
                onClick={() =>
                  dispatch(toggleCell({ x: colIndex, y: rowIndex }))
                }
              ></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <table id="layout">
      <tbody>
        <tr>
          <td></td>
          <td>{upperNumbersDom}</td>
        </tr>
        <tr>
          <td>{leftNumbersDom}</td>
          <td>{tableDom}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default GraphiLogics;
