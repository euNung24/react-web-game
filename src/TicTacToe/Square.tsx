import React, { useState } from "react";

export default function Square() {
  const [value, setValue] = useState<string>("");
  function handleClick() {
    setValue("X");
  }

  return (
    <button type="button" className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
