import React from "react";

export default function Square({
  value = null,
  mark,
  onSquareClick,
}: {
  value: string | null;
  mark: boolean;
  onSquareClick: () => void;
}) {
  return (
    <button
      type="button"
      className="square"
      onClick={onSquareClick}
      style={{ color: mark ? "blue" : "initial" }}
    >
      {value}
    </button>
  );
}
