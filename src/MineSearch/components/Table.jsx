import React, { memo } from "react";

import TrContainer from "../containers/TrContainer";
import { StyledTable } from "../styles/StyledTable";

const Table = memo(({ tableData }) => {
  return (
    <StyledTable>
      <table>
        {tableData &&
          tableData.map((row, i) => (
            <TrContainer key={i} rowIndex={i} rowData={row} />
          ))}
      </table>
    </StyledTable>
  );
});

export default Table;
