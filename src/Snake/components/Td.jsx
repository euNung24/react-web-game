import React, { memo, useContext, useMemo } from "react";
import { SnakeContext } from "./Snake";
import appleImage from "../images/apple.png";
import bananaImage from "../images/banana.png";
import orangeImage from "../images/orange.png";
import pineappleImage from "../images/pineapple.png";
import watermelonImage from "../images/watermelon.png";
import { StyeldTd } from "../Styles/StyledTd";

const fruitsImage = [
  { apple: appleImage },
  { banana: bananaImage },
  { orange: orangeImage },
  { pineapple: pineappleImage },
  { watermelon: watermelonImage },
];

const Td = memo(({ colIndex, rowIndex }) => {
  const { tableData, fruitPosition, snake } = useContext(SnakeContext);

  const row = (rowIndex + 1) % 2 === 0 ? "even" : "odd";
  const col = (colIndex + 1) % 2 === 0 ? "even" : "odd";
  const first =
    rowIndex === 0 || rowIndex === tableData.length - 1 ? true : false;

  const setText = () => {
    if (rowIndex === 0 || rowIndex === tableData.length - 1) {
      return null;
    }

    if (tableData[rowIndex][colIndex] === tableData[snake[0][0]][snake[0][1]]) {
      return "head";
    }

    for (let i = 1; i < snake.length; i++) {
      if (
        tableData[rowIndex][colIndex] === tableData[snake[i][0]][snake[i][1]]
      ) {
        return "body";
      }
    }

    if (
      tableData[rowIndex][colIndex] ===
      tableData[fruitPosition[0]][fruitPosition[1]]
    ) {
      return "fruits";
    }
  };

  const getFruitImage = useMemo(() => {
    const number = Math.floor(Math.random() * fruitsImage.length);
    const src = Object.values(fruitsImage[number])[0];
    return src;
  }, [fruitPosition]);

  return (
    <StyeldTd row={row} col={col} first={first}>
      {setText() === "fruits" && <img src={getFruitImage} className="fruit" />}
      {setText() === "head" && <span className="head"></span>}
      {setText() === "body" && <span className="body"></span>}
    </StyeldTd>
  );
});

export default Td;
