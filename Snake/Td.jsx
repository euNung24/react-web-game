import React, { memo, useCallback, useContext, useEffect, useMemo } from 'react';
import { SnakeContext } from './Snake';
import styled, {css} from 'styled-components';

const StyeldTd = styled.td`
  width: 30px;
  height: 30px; 
  ${props => props.row+props.col ==='evenodd' || props.row+props.col === 'oddeven' ? css`background: #31b537` : css`background: #4ad951` };
  ${props => props.num && (props.row+props.col ==='evenodd' || props.row+props.col === 'oddeven' ? css`background: #ab966f` : css`background: #dbbd86`)};
  ${props => props.first && css`background: #296b29;`};
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


// .head {
//   position: absolute;
//   ${props => props.upDown === 'down' && css`bottom: 0; left: -1.5px; transform: rotateZ(-90deg)`};
//   ${props => props.upDown === 'up' && css`top: 0; left: 1.5px; transform: rotateZ(90deg)`};
//   ${props => props.leftRight === 'left' && css`top: -0.6px; left: 0; transform:`}; 
//   ${props => props.leftRight === 'right' && css`top: 2px; right: 0; transform: rotateZ(180deg)`};
// }

// .body.upDown {
//   position: absolute;
//   ${props => props.upDown === 'up' && css`width: 41%; height: 69%; top: 0; left: 50%; transform: translateX(-50%)`};
//   ${props => props.upDown === 'down' && css`width: 41%; height: 69%; bottom: 0; left: 50%; transform: translateX(-50%)`};
//   ${props => props.upDown === 'right' && css`width: 69%; height: 41%; top: 50%; right: 0; transform: translateY(-50%)`};
// }
// .body.leftRight {
//   position: absolute;
//   ${props => props.leftRight === 'right' && css`width: 69%; height: 41%; top: 50%; right: 0; transform: translateY(-50%)`}; 
//   ${props => props.leftRight === 'left' && css`width: 69%; height: 41%; top: 50%; left: 0; transform: translateY(-50%)`};
//   ${props => props.leftRight === 'down' && css`width: 41%; height: 69%; bottom: 0; left: 50%; transform: translateX(-50%)`};
// }

const fruitsImage = [
  { apple: './Snake/images/apple.png' },
  { banana: './Snake/images/banana.png' },
  { orange: './Snake/images/orange.png' },
  { pineapple: './Snake/images/pineapple.png' },
  { watermelon: './Snake/images/watermelon.png' },
]

const Td = memo(({ colIndex, rowIndex }) => {
  const { tableData, fruitPosition, snake, direction } = useContext(SnakeContext);

  const row = (rowIndex + 1) % 2 === 0 ? 'even' : 'odd';
  const col = (colIndex + 1) % 2 === 0 ? 'even' : 'odd';
  const first = rowIndex === 0 || rowIndex === tableData.length - 1? true : false;
  
  // const leftRight = useCallback(() => {
  //   if(JSON.stringify(snake).includes(JSON.stringify([rowIndex, colIndex-1]))) { // 왼쪽
  //     return 'left';
  //   } else if(JSON.stringify(snake).includes(JSON.stringify([rowIndex, colIndex+1]))) { // 오른쪽
  //     return 'right';
  //   } if(JSON.stringify(snake).includes(JSON.stringify([rowIndex+1, colIndex]))) {
  //     return 'down';
  //   } else {
  //     return
  //   }
  // }, [snake])

  // const upDown = useCallback(() => {
  //   if(JSON.stringify(snake).includes(JSON.stringify([rowIndex-1, colIndex]))) { // 위
  //     return 'up';
  //   } else if(JSON.stringify(snake).includes(JSON.stringify([rowIndex+1, colIndex]))) { // 아래
  //     return 'down';
  //   } else if(JSON.stringify(snake).includes(JSON.stringify([rowIndex, colIndex+1]))) {
  //     return 'right';
  //   } else {
  //     return
  //   }
  // }, [snake])



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
    // <StyeldTd row={row} col={col} first={first} upDown={upDown()} leftRight={leftRight()} style={{ width: '30px', height: '30px' }}>
    //   { setText() === 'fruits' && <img src={getFruitImage} className="fruit" /> }
    //   { setText() === 'head' && <img src="./Snake/images/snake_head.png" className="head"/> }
    //   { setText() === 'body' && <><span className="body upDown"></span><span className="body leftRight"></span></>}
    // </StyeldTd>
  );
});

export default Td;