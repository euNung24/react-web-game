import React from "react";

interface InfoProps {
  history: string[][];
  isSortAsc: boolean;
  onJump: (num: number) => void;
}

export default function Info({ isSortAsc, history, onJump }: InfoProps) {
  const jsx = history.map((squares, idx) => {
    let description: string;
    let [row, col] = [0, 0];

    if (idx === history.length - 1) {
      description = "You are at move #" + idx;
    } else if (idx > 0) {
      const clickedLocation = history[idx - 1].findIndex(
        (prev, prevIdx) => prev !== squares[prevIdx],
      );
      [row, col] = [Math.trunc(+clickedLocation / 3), +clickedLocation % 3];
      description = `Go to move #${idx} (${row + 1}, ${col + 1})`;
    } else {
      description = "Go to move #" + idx;
    }

    return (
      <li key={idx}>
        {idx === history.length - 1 ? (
          <span>You are at move {idx}</span>
        ) : (
          <button onClick={() => onJump(idx)}>{description}</button>
        )}
      </li>
    );
  });

  return isSortAsc ? jsx : jsx.reverse();
}
