import React from "react";

interface InfoProps {
  history: string[][];
  onJump: (num: number) => void;
}

export default function Info({ history, onJump }: InfoProps) {
  return history.map((squares, idx) => {
    const description = idx > 0 ? "Go to move #" + idx : "Go to game start";

    return (
      <li key={idx}>
        <button onClick={() => onJump(idx)}>{description}</button>
      </li>
    );
  });
}
