import React, { memo } from "react";
import TdContainer from "../containers/TdContainer";

const Tr = memo(({ rowData, rowIndex, data }) => {
  return (
    <tr style={{ width: "100%", height: `${(100 / data.row) * 5.5}px` }}>
      {rowData.map((col, i) => (
        <TdContainer key={i} rowIndex={rowIndex} colIndex={i} colData={col} />
      ))}
    </tr>
  );
});

export default Tr;
