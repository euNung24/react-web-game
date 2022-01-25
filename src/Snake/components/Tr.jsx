import React, { memo } from "react";
import Td from "./Td";

const Tr = memo(({ rowIndex, rowData }) => {
  return (
    <tr>
      {rowData.map((i) => (
        <Td key={i} colIndex={i} rowIndex={rowIndex} />
      ))}
    </tr>
  );
});

export default Tr;
