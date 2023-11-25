import React, { useState } from "react";
import Board from "./Board";
import Info from "./Info";

export default function TicTacToe() {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [history, setHistory] = useState<string[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const currentSquare = history[currentMove];

  function handlePlay(newSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>
          <Info history={history} onJump={jumpTo} />
        </ol>
      </div>
    </div>
  );
}
