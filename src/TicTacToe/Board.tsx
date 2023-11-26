import React from "react";
import Square from "./Square";
import "./style.css";

interface BoardProps {
  xIsNext: boolean;
  squares: string[];
  onPlay: (arr: string[]) => void;
}

export default function Board({ xIsNext, squares, onPlay }: BoardProps) {
  const winner = calculateWinner(squares)?.winner;
  const winnerMark = calculateWinner(squares)?.mark || [];
  const isFull = squares.findIndex((v) => v === null);
  const status = winner
    ? "Winner: " + winner
    : isFull === -1
      ? "draw"
      : "Next player: " + (xIsNext ? "X" : "O");

  function handleClick(index: number) {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = [...squares];
    nextSquares[index] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  return (
    <>
      <div className="status">{status}</div>
      {[...new Array(3)].map((_, row) => (
        <div key={"row" + row} className="board-row">
          {[...new Array(3)].map((_, col) => (
            <Square
              key={"col" + col}
              mark={winnerMark.includes(row * 3 + col)}
              value={squares[row * 3 + col]}
              onSquareClick={() => handleClick(row * 3 + col)}
            />
          ))}
        </div>
      ))}
    </>
  );
}

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [idx1, idx2, idx3] of lines) {
    if (
      squares[idx1] &&
      squares[idx1] === squares[idx2] &&
      squares[idx2] === squares[idx3]
    ) {
      return {
        winner: squares[idx1],
        mark: [idx1, idx2, idx3],
      };
    }
  }
  return null;
}
