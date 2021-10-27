import React, { memo, useContext } from 'react';
import Tr from './Tr';
import { SnakeContext } from './Snake';
import styled from 'styled-components';

const StyledTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  box-sizing: border-box;
  -webkit-box-pack: center;
  table {
    border-collapse: collapse;
  }
`; 
const Table = memo(() => {
  const { tableData } = useContext(SnakeContext);

  return (
    <StyledTable>
      <table>
        { tableData.map((row, i) => <Tr key={i} rowIndex={i} rowData={row} />)}
      </table>
    </StyledTable>
  );
});

export default Table;