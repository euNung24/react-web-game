import React from "react";
import { useSelector } from "react-redux";

import Td from "../components/Td";

const TdContainer = ({ rowIndex, colIndex, colData }) => {
  const { halted, tableData, info, start } = useSelector((state) => ({
    halted: state.halted,
    tableData: state.tableData,
    info: state.data,
    start: state.start,
  }));
  return (
    <Td
      halted={halted}
      tableData={tableData}
      info={info}
      start={start}
      rowIndex={rowIndex}
      colIndex={colIndex}
      colData={colData}
    />
  );
};

export default TdContainer;
