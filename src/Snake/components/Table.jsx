import React, { memo, useContext } from "react";
import Tr from "./Tr";
import { SnakeContext } from "./Snake";
import { StyledTable } from "../Styles/StyledTable";

const Table = memo(() => {
  const { tableData } = useContext(SnakeContext);

  return (
    <StyledTable>
      <table>
        {tableData.map((row, i) => (
          <Tr key={i} rowIndex={i} rowData={row} />
        ))}
      </table>
    </StyledTable>
  );
});

export default Table;
