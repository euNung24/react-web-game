import React from "react";

export default function Square({ value = "" }: { value?: string }) {
  return (
    <button type="button" className="square">
      {value}
    </button>
  );
}
