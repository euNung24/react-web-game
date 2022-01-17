import React, { memo, useCallback } from "react";
import { SET_NUMBERS } from "./MineSearch";
import { RiFlag2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  doubleClick,
  isFinished,
  openBlock,
  setFlag,
  setNormal,
} from "../actions/actions";
import { StyeldTd } from "../styles/StyledTd";

const setText = (data, halted) => {
  if (data > 0) {
    return data;
  }

  if (data === SET_NUMBERS.flag || data === SET_NUMBERS.mine_flag) {
    return <RiFlag2Fill color="red" />;
  }

  if (halted) {
    if (data === SET_NUMBERS.mine) {
      return <span>●</span>;
    }
  }
};

const Td = memo(({ rowIndex, colIndex, halted, tableData, info, start }) => {
  const data = tableData[rowIndex][colIndex];
  const row = (rowIndex + 1) % 2 === 0 ? "even" : "odd";
  const col = (colIndex + 1) % 2 === 0 ? "even" : "odd";

  const dispatch = useDispatch();

  const handleClick = () => {
    if (halted) {
      return;
    }
    dispatch(openBlock(rowIndex, colIndex));
    dispatch(isFinished());
  };

  const handleRightClick = useCallback(
    (e) => {
      e.preventDefault();
      if (halted || !start) {
        return;
      }
      if (data === SET_NUMBERS.normal || data === SET_NUMBERS.mine) {
        dispatch(setFlag(rowIndex, colIndex));
      } else if (data === SET_NUMBERS.flag || data === SET_NUMBERS.mine_flag) {
        dispatch(setNormal(rowIndex, colIndex));
      }
    },
    [data, halted, start]
  );

  const handleDubleClick = useCallback(() => {
    if (halted || !start) {
      return;
    }
    dispatch(doubleClick(rowIndex, colIndex));
    dispatch(isFinished());
  }, [data, halted, start]);

  return (
    <StyeldTd
      row={row}
      col={col}
      width={100 / info.col}
      height={(100 / info.row) * 5.5}
      num={data >= 0 ? "open" : null}
      onClick={handleClick}
      onContextMenu={handleRightClick}
      onDoubleClick={handleDubleClick}
    >
      {setText(data, halted)}
    </StyeldTd>
  );
});

export default Td;
