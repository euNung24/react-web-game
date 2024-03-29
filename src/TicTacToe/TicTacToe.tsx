import React, { useState } from "react";
import Board from "./Board";
import Info from "./Info";

export default function TicTacToe() {
  const [isSortAsc, setIsSortAsc] = useState<boolean>(true);
  const [history, setHistory] = useState<string[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquare = history[currentMove];

  function handlePlay(newSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <div>
          <span>sort: </span>
          <input
            type="checkbox"
            id="sort"
            defaultChecked={isSortAsc}
            onChange={() => setIsSortAsc((prev) => !prev)}
          />
          <label htmlFor="sort">asc</label>
        </div>
        <ol>
          <Info isSortAsc={isSortAsc} history={history} onJump={jumpTo} />
        </ol>
      </div>
    </div>
  );
}
