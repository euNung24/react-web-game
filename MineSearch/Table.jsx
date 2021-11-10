import React, { memo } from 'react';
import Tr from './Tr';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
  padding: 20px;
  box-sizing: border-box;
  -webkit-box-pack: center;
  table {
    border-collapse: collapse;
    width: 30vw;
    min-width: 340px;
  }
`; 

const Table = memo(() => {
  const { tableData } = useSelector(state => ({
    tableData: state.tableData
  }));

  return (
    <StyledTable>
      <table>
        { tableData && tableData.map((row, i) => <Tr key={i} rowIndex={i} rowData={row} />)}
      </table>
    </StyledTable>
  );
});

export default Table;