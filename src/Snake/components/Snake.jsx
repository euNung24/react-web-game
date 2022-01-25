import React, {
  createContext,
  useMemo,
  useEffect,
  useRef,
  useState,
} from "react";
import { GlobalStyle } from "../Styles/GlobalStyle";
import Header from "./Header";
import Table from "./Table";

function setTable(row, col) {
  const tableData = Array(row)
    .fill()
    .map((_, i) =>
      Array(col)
        .fill()
        .map((_2, j) => i * col + j)
    );
  return tableData;
}

function getFruitPosition(row, col) {
  const fruitRow = Math.floor(Math.random() * (row - 2) + 1);
  const fruitCol = Math.floor(Math.random() * col);

  return [fruitRow, fruitCol];
}

export const SnakeContext = createContext({
  tableData: setTable(22, 11),
  fruitPosition: getFruitPosition(22, 11),
  snake: [
    [10, 3],
    [10, 2],
    [10, 1],
    [10, 0],
  ],
  direction: "right",
});

const Snake = () => {
  const tableData = setTable(22, 11);
  const [direction, setDirection] = useState("right");
  const [snake, setSnake] = useState([
    [10, 3],
    [10, 2],
    [10, 1],
    [10, 0],
  ]);
  const [beforeDir, setBeforeDir] = useState(null);
  const [fruitPosition, setFruitPosition] = useState(getFruitPosition(22, 11));
  const [start, setStart] = useState(false);
  const [score, setScore] = useState(0);
  const interval = useRef(null);
  const inputRef = useRef(null);
  const crushInterval = useRef(null);

  const value = useMemo(
    () => ({ tableData, fruitPosition, snake, direction }),
    [tableData, fruitPosition, snake, direction]
  );

  useEffect(() => {
    if (!start) {
      return;
    }
    if (JSON.stringify(snake[0]) === JSON.stringify(fruitPosition)) {
      setScore((prevScore) => prevScore + 1);
      setSnake((prevSnake) => [fruitPosition, ...prevSnake]);
      setFruitPosition(getFruitPosition(22, 11));
      return;
    }

    crushInterval.current = setInterval(() => {
      if (JSON.stringify(snake).includes(JSON.stringify(fruitPosition))) {
        setFruitPosition(getFruitPosition(22, 11));
      }
      if (
        snake[0][0] <= 0 ||
        snake[0][0] >= tableData.length - 1 ||
        snake[0][1] < 0 ||
        snake[0][1] >= tableData[0].length
      ) {
        clearInterval(interval.current);
        setStart(false);
        clearInterval(crushInterval.current);
        return;
      }
      if (
        JSON.stringify(snake.slice(3, snake.length)).includes(
          JSON.stringify(snake[0])
        )
      ) {
        clearInterval(interval.current);
        setStart(false);
        clearInterval(crushInterval.current);
        console.log(snake, snake.slice(3, snake.length), snake[0]);
        return;
      }
    }, 200);

    if (beforeDir !== "right" && direction === "left") {
      clearInterval(interval.current);
      interval.current = setInterval(() => {
        setSnake((prevSnake) => [
          [prevSnake[0][0], prevSnake[0][1] - 1],
          ...prevSnake.slice(0, snake.length - 1),
        ]);
      }, 200);
    } else if (beforeDir !== "left" && direction === "right") {
      clearInterval(interval.current);
      interval.current = setInterval(() => {
        setSnake((prevSnake) => [
          [prevSnake[0][0], prevSnake[0][1] + 1],
          ...prevSnake.slice(0, snake.length - 1),
        ]);
      }, 200);
    } else if (beforeDir !== "down" && direction === "up") {
      clearInterval(interval.current);
      interval.current = setInterval(() => {
        setSnake((prevSnake) => [
          [prevSnake[0][0] - 1, prevSnake[0][1]],
          ...prevSnake.slice(0, snake.length - 1),
        ]);
      }, 200);
    } else if (beforeDir !== "up" && direction === "down") {
      clearInterval(interval.current);
      interval.current = setInterval(() => {
        setSnake((prevSnake) => [
          [prevSnake[0][0] + 1, prevSnake[0][1]],
          ...prevSnake.slice(0, snake.length - 1),
        ]);
      }, 200);
    } else {
      setDirection(beforeDir);
    }

    return () => {
      clearInterval(interval.current);
      clearInterval(crushInterval.current);
    };
  }, [direction, start, snake]);

  const handlePress = (e) => {
    e.preventDefault();
    if (e.key === "ArrowLeft") {
      setBeforeDir(direction);
      setDirection("left");
    } else if (e.key === "ArrowRight") {
      setBeforeDir(direction);
      setDirection("right");
    } else if (e.key === "ArrowUp") {
      setBeforeDir(direction);
      setDirection("up");
    } else if (e.key === "ArrowDown") {
      setBeforeDir(direction);
      setDirection("down");
    }
  };

  const handleClick = () => {
    setStart(true);
    inputRef.current.focus();
    setDirection("right");
    setBeforeDir(null);
    setSnake([
      [10, 3],
      [10, 2],
      [10, 1],
      [10, 0],
    ]);
    setScore(0);
  };

  return (
    <SnakeContext.Provider value={value}>
      <GlobalStyle start={start} />
      <Header score={score} />
      <Table />
      <input type="text" ref={inputRef} onKeyDown={handlePress} />
      <button className="startBtn" onClick={handleClick}>
        Start
      </button>
    </SnakeContext.Provider>
  );
};

export default Snake;
