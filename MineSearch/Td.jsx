import React, { memo, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { SET_NUMBERS } from './MineSearch';
import { RiFlag2Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { doubleClick, isFinished, openBlock, setFlag, setNormal } from './actions/actions';
import { useSelector } from 'react-redux';

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
  const { halted, tableData, info } = useSelector(state => ({
    halted: state.halted,
    tableData: state.tableData,
    info: state.data,
  }))
  
  const data = tableData[rowIndex][colIndex];
  const row = (rowIndex + 1) % 2 === 0 ? 'even' : 'odd';
  const col = (colIndex + 1) % 2 === 0 ? 'even' : 'odd';

  const dispatch = useDispatch();

  const handleClick = () => {
    if(halted) {
      return;
    }
    dispatch(openBlock(rowIndex, colIndex));
    dispatch(isFinished());    
  }

  const handleRightClick = useCallback((e) => {
    e.preventDefault();
    if(halted) {
      return;
    }
    if(data === SET_NUMBERS.normal || data === SET_NUMBERS.mine) {
      dispatch(setFlag(rowIndex, colIndex));
    } else if(data === SET_NUMBERS.flag || data ===SET_NUMBERS.mine_flag) {
      dispatch(setNormal(rowIndex, colIndex));
    }
  }, [data, halted])

  const handleDubleClick = useCallback(() => {
    if(halted) {
      return;
    }
    dispatch(doubleClick(rowIndex, colIndex));
    dispatch(isFinished());  
  }, [data, halted]);

  return (
    <StyeldTd style={{ width: `${100 / info.col}%`, height: `${(100 / (info.row)) * 5.5}px`}} row={row} col={col} num={ data >= 0 ? 'open' : null } onClick={handleClick} onContextMenu={handleRightClick} onDoubleClick={handleDubleClick}>
      { setText(data, halted) }
    </StyeldTd>
  );
});

export default Td;