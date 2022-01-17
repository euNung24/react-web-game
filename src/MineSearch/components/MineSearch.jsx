import React, { memo } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers/reducers";

import HeaderContainer from "../containers/HeaderContainer";
import TableContainer from "../containers/TableContainer";
import ResultContainer from "../containers/ResultContainer";
import { GlobalStyle } from "../styles/GlobalStyle";

export const SET_NUMBERS = {
  normal: -1,
  flag: -2,
  mine_flag: -3,
  mine: -4,
};

export function setTableData(row, col, mine) {
  const numberMine = -4;
  const numberNormal = -1;
  const tableData = Array(row)
    .fill()
    .map((rowData, i) =>
      Array(col)
        .fill()
        .map((colData, j) => i * col + j)
    );
  const candidate = Array(row * col)
    .fill()
    .map((rowData, i) => i);
  const suffle = [];
  while (suffle.length < mine) {
    suffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const realTable = tableData.map((row, i) =>
    row.map((col, i) => (suffle.includes(col) ? numberMine : numberNormal))
  );
  return realTable;
}

const initState = {
  data: {
    row: 20,
    col: 10,
    mine: 35,
  },
  tableData: setTableData(20, 10, 35),
  halted: false,
  result: "",
  openedBlock: 0,
  flag: 35,
  timer: 0,
  start: false,
};

const store = createStore(reducer, initState, composeWithDevTools());

const MineSearch = memo(() => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <HeaderContainer />
      <TableContainer />
      <ResultContainer />
    </Provider>
  );
});

export default MineSearch;
