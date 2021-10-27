import React, { memo, useCallback, useContext, useEffect, useMemo } from 'react';
import { SnakeContext } from './Snake';
import styled, {css} from 'styled-components';

const StyeldTd = styled.td`
  width: 30px;
  height: 30px; 
  ${props => props.row+props.col ==='evenodd' || props.row+props.col === 'oddeven' ? css`background: #31b537` : css`background: #4ad951` };
  ${props => props.num && (props.row+props.col ==='evenodd' || props.row+props.col === 'oddeven' ? css`background: #ab966f` : css`background: #dbbd86`)};
  ${props => props.first && css`visibility: collapse`};
  text-align: center;
  line-height: 0;
  position: relative;

  .fruit {
    width: 80%;
    height: 80%;
  }

  span {
    display: inline-block;
    background: #b83dba;
    border-radius: 30%;
  }

  .head {
    width: 28px;
    height: 28px;
    background: #850c87;
  }

  .body {
    width: 20px;
    height: 20px;
  }
`;

const fruitsImage = [
  { apple: './Snake/images/apple.png' },
  { banana: './Snake/images/banana.png' },
  { orange: './Snake/images/orange.png' },
  { pineapple: './Snake/images/pineapple.png' },
  { watermelon: './Snake/images/watermelon.png' },
]

const Td = memo(({ colIndex, rowIndex }) => {
  const { tableData, fruitPosition, snake } = useContext(SnakeContext);

  const row = (rowIndex + 1) % 2 === 0 ? 'even' : 'odd';
  const col = (colIndex + 1) % 2 === 0 ? 'even' : 'odd';
  const first = rowIndex === 0 || rowIndex === tableData.length - 1? true : false;

  const setText = () => {
    if((rowIndex === 0) || (rowIndex === tableData.length-1)) {
      return null;
    }
   
    if(tableData[rowIndex][colIndex] === tableData[snake[0][0]][snake[0][1]]) {
      return 'head'
    }
    
    for(let i = 1; i < snake.length; i++) {
      if(tableData[rowIndex][colIndex] === tableData[snake[i][0]][snake[i][1]]){
        return 'body';
      }
    } 

    if(tableData[rowIndex][colIndex] === tableData[fruitPosition[0]][fruitPosition[1]]) {
      return 'fruits';
    }
  }

  
  const getFruitImage = useMemo(() => {
    const number = Math.floor(Math.random() * fruitsImage.length);
    const src = Object.values(fruitsImage[number])[0];
    return src;
  }, [fruitPosition]);

  return (
    <StyeldTd row={row} col={col} first={first} style={{ width: '30px', height: '30px' }}>
      { setText() === 'fruits' && <img src={getFruitImage} className="fruit" /> }
      { setText() === 'head' && <span className='head'></span>}
      { setText() === 'body' && <span className="body"></span>}
    </StyeldTd>
  );
});

export default Td;