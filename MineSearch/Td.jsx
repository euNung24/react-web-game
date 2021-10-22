import React, { memo, useContext, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { DOUBLE_CLICK, IS_FINISHED, MineSearchContext, OPEN_BLOCK, SET_FLAG, SET_NORMAL, SET_NUMBERS } from './MineSearch';
import { RiFlag2Fill } from "react-icons/ri";

const StyeldTd = styled.td`
  ${props => props.row+props.col ==='evenodd' || props.row+props.col === 'oddeven' ? css`background: #31b537` : css`background: #4ad951` };
  ${props => props.num && (props.row+props.col ==='evenodd' || props.row+props.col === 'oddeven' ? css`background: #ab966f` : css`background: #dbbd86`)};
  text-align: center;
  line-height: 0;
  span {
    color: #fff;
  }
`;

const setText = (data, halted) => {
  if(data > 0) {
    return data;
  }

  if(data === SET_NUMBERS.flag || data === SET_NUMBERS.mine_flag) {
    return <RiFlag2Fill color="red"/>;
  } 

  if(halted) {
    if(data === SET_NUMBERS.mine) {
      return <span>●</span>;
    }
  }
}

const Td = memo(({ rowIndex, colIndex }) => {
  
  const { dispatch, halted, tableData, data: info } = useContext(MineSearchContext);
  const data = tableData[rowIndex][colIndex];
  const row = (rowIndex + 1) % 2 === 0 ? 'even' : 'odd';
  const col = (colIndex + 1) % 2 === 0 ? 'even' : 'odd';

  const handleClick = () => {
    if(halted) {
      return;
    }
    dispatch({ type: OPEN_BLOCK, row: rowIndex, col: colIndex });
    dispatch({ type: IS_FINISHED });
  }

  const handleRightClick = useCallback((e) => {
    e.preventDefault();
    if(halted) {
      return;
    }
    if(data === SET_NUMBERS.normal || data === SET_NUMBERS.mine) {
      dispatch({ type: SET_FLAG, row: rowIndex, col: colIndex });
    } else if(data === SET_NUMBERS.flag || data ===SET_NUMBERS.mine_flag) {
      dispatch({ type: SET_NORMAL, row: rowIndex, col: colIndex });
    }
  }, [data, halted])

  const handleDubleClick = useCallback(() => {
    if(halted) {
      return;
    }
    dispatch({ type: DOUBLE_CLICK, row: rowIndex, col: colIndex });
    dispatch({ type: IS_FINISHED });
  }, [data, halted]);

  return (
    <StyeldTd style={{ width: `${100 / info.col}%`, height: `${(100 / (info.row)) * 5.5}px`}}row={row} col={col} num={ data >= 0 ? 'open' : null } onClick={handleClick} onContextMenu={handleRightClick} onDoubleClick={handleDubleClick}>
      { setText(data, halted) }
    </StyeldTd>
  );
});

export default Td;