import { setTableData, SET_NUMBERS } from "../components/MineSearch";
import {
  SET_LEVEL,
  OPEN_BLOCK,
  DOUBLE_CLICK,
  SET_FLAG,
  SET_NORMAL,
  IS_FINISHED,
} from "../actions/actionNames";

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

export default function mineSearch(state = initState, action) {
  switch (action.type) {
    case SET_LEVEL: {
      const { row, col, mine } = action;
      return {
        ...state,
        data: {
          row,
          col,
          mine,
        },
        tableData: setTableData(row, col, mine),
        halted: false,
        start: false,
        result: "",
        openedBlock: 0,
        flag: mine,
      };
    }
    case OPEN_BLOCK: {
      const { row, col } = action;
      const tableData = [...state.tableData];
      tableData[row] = [...state.tableData[row]];
      console.log("openBlock");

      if (tableData[row][col] === SET_NUMBERS.mine) {
        console.log("check_mine");
        return {
          ...state,
          halted: true,
          result: "실패",
          openedBlock: 0,
        };
      } else if (tableData[row][col] === SET_NUMBERS.normal) {
        console.log("checkNormal");
        const check_mine = (row, col) => {
          const around = [];
          if (row - 1 >= 0) {
            around.push(
              tableData[row - 1][col - 1],
              tableData[row - 1][col],
              tableData[row - 1][col + 1]
            );
          }
          if (col - 1 >= 0) {
            around.push(tableData[row][col - 1]);
          }
          if (col + 1 < tableData[row].length) {
            around.push(tableData[row][col + 1]);
          }
          if (row + 1 < tableData.length) {
            around.push(
              tableData[row + 1][col - 1],
              tableData[row + 1][col],
              tableData[row + 1][col + 1]
            );
          }
          const mineNumber = around.filter((item) =>
            [SET_NUMBERS.mine, SET_NUMBERS.mine_flag].includes(item)
          ).length;
          tableData[row][col] = mineNumber;
          if (tableData[row][col] === 0) {
            const near = [];
            if (row - 1 >= 0) {
              near.push([row - 1, col - 1]);
              near.push([row - 1, col]);
              near.push([row - 1, col + 1]);
            }
            if (col - 1 >= 0) {
              near.push([row, col - 1]);
            }
            if (col + 1 < tableData[row].length) {
              near.push([row, col + 1]);
            }
            if (row + 1 < tableData.length) {
              near.push([row + 1, col - 1]);
              near.push([row + 1, col]);
              near.push([row + 1, col + 1]);
            }
            near.forEach((item) => {
              if (tableData[item[0]][item[1]] <= SET_NUMBERS.normal) {
                check_mine(item[0], item[1]);
                state.openedBlock += 1;
              }
            });
          }
        };
        check_mine(row, col);
        return {
          ...state,
          tableData,
          halted: false,
          openedBlock: state.openedBlock + 1,
          start: true,
        };
      } else {
        return state;
      }
    }
    case DOUBLE_CLICK: {
      const { row, col } = action;
      const tableData = [...state.tableData];
      tableData[row] = [...state.tableData[row]];
      console.log("duble");
      if (tableData[row][col] >= 0) {
        const check_mine = (row, col) => {
          const around = [];
          if (row - 1 >= 0) {
            around.push(
              tableData[row - 1][col - 1],
              tableData[row - 1][col],
              tableData[row - 1][col + 1]
            );
          }
          if (col - 1 >= 0) {
            around.push(tableData[row][col - 1]);
          }
          if (col + 1 < tableData[row].length) {
            around.push(tableData[row][col + 1]);
          }
          if (row + 1 < tableData.length) {
            around.push(
              tableData[row + 1][col - 1],
              tableData[row + 1][col],
              tableData[row + 1][col + 1]
            );
          }
          const mineNumber = around.filter((item) =>
            [SET_NUMBERS.mine, SET_NUMBERS.mine_flag].includes(item)
          ).length;
          const flagNumber = around.filter((item) =>
            [SET_NUMBERS.mine_flag, SET_NUMBERS.flag].includes(item)
          ).length;
          tableData[row][col] = mineNumber;
          console.log(around);
          console.log(mineNumber, flagNumber);
          if (around.includes(SET_NUMBERS.flag)) {
            console.log("normal_flag");
            return "failed";
          }

          if (tableData[row][col] - flagNumber === 0) {
            console.log("near");
            const near = [];
            if (row - 1 >= 0) {
              near.push([row - 1, col - 1]);
              near.push([row - 1, col]);
              near.push([row - 1, col + 1]);
            }
            if (col - 1 >= 0) {
              near.push([row, col - 1]);
            }
            if (col + 1 < tableData[row].length) {
              near.push([row, col + 1]);
            }
            if (row + 1 < tableData.length) {
              near.push([row + 1, col - 1]);
              near.push([row + 1, col]);
              near.push([row + 1, col + 1]);
            }
            near.forEach((item) => {
              if (
                tableData[item[0]][item[1]] !== SET_NUMBERS.flag &&
                tableData[item[0]][item[1]] !== SET_NUMBERS.mine_flag &&
                tableData[item[0]][item[1]] === SET_NUMBERS.normal
              ) {
                console.log("if Dtat");
                check_mine(item[0], item[1]);
                state.openedBlock += 1;
              } else if (
                tableData[item[0]][item[1]] !== SET_NUMBERS.flag &&
                tableData[item[0]][item[1]] !== SET_NUMBERS.mine_flag &&
                tableData[item[0]][item[1]] > SET_NUMBERS.normal
              ) {
                console.log("hi else if");
                return;
              }
            });
          }
        };
        console.log("check", check_mine(row, col));
        if (check_mine(row, col) === "failed") {
          return {
            ...state,
            tableData,
            openedBlock: 0,
            halted: true,
            result: "실패",
          };
        }

        check_mine(row, col);

        return {
          ...state,
          tableData,
          openedBlock: state.openedBlock,
        };
      } else {
        return state;
      }
    }
    case SET_FLAG: {
      const { row, col } = action;
      const tableData = [...state.tableData];
      tableData[row] = [...state.tableData[row]];
      if (tableData[row][col] === SET_NUMBERS.normal) {
        tableData[row][col] = SET_NUMBERS.flag;
        console.log(tableData[row][col]);
      } else {
        tableData[row][col] = SET_NUMBERS.mine_flag;
        console.log(tableData[row][col]);
      }
      return {
        ...state,
        tableData,
        flag: state.flag - 1,
      };
    }
    case SET_NORMAL: {
      const { row, col } = action;
      const tableData = [...state.tableData];
      tableData[row] = [...state.tableData[row]];
      if (tableData[row][col] === SET_NUMBERS.flag) {
        tableData[row][col] = SET_NUMBERS.normal;
      } else {
        tableData[row][col] = SET_NUMBERS.mine;
      }
      return {
        ...state,
        tableData,
        flag: state.flag + 1,
      };
    }
    case IS_FINISHED: {
      const { openedBlock, data } = state;
      if (openedBlock === data.row * data.col - data.mine) {
        return {
          ...state,
          halted: true,
          result: "성공",
        };
      }
    }
    default: {
      return state;
    }
  }
}
