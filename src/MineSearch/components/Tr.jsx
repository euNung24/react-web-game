import React, { memo } from 'react';
import Td from './Td';
import { useSelector } from 'react-redux';

const Tr = memo(({ rowData, rowIndex }) => {
  const { data } = useSelector(state => ({
    data: state.data
  }));
  return (
    <tr style={{width: '100%', height: `${(100 / (data.row)) * 5.5}px`}}>
      { rowData.map((col, i) => <Td key={i} rowIndex={rowIndex} colIndex={i} colData={col}/>) }
    </tr>
  );
});

export default Tr;