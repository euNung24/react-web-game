import React, { memo, useContext, useMemo } from 'react';
import { SnakeContext } from './Snake';
import styled, {css} from 'styled-components';
import appleImage from "../images/apple.png";
import bananaImage from "../images/banana.png";
import orangeImage from "../images/orange.png";
import pineappleImage from "../images/pineapple.png";
import watermelonImage from "../images/watermelon.png";


const StyeldTd = styled.td`
  width: 1.3rem;
  height: 20px;
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
    width: 90%;
    height: 90%;
    background: #850c87;
  }

  .body {
    width: 80%;
    height: 80%;
  }
`;

const fruitsImage = [
  { apple: appleImage },
  { banana: bananaImage },
  { orange: orangeImage },
  { pineapple: pineappleImage },
  { watermelon: watermelonImage },
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
    <StyeldTd row={row} col={col} first={first}>
      { setText() === 'fruits' && <img src={getFruitImage} className="fruit" /> }
      { setText() === 'head' && <span className='head'></span>}
      { setText() === 'body' && <span className="body"></span>}
    </StyeldTd>
  );
});

export default Td;