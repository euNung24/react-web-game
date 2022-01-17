import React from "react";
import { useSelector } from "react-redux";

import Table from "../components/Table";

const TableContainer = () => {
  const { tableData } = useSelector((state) => ({
    tableData: state.tableData,
  }));
  return <Table tableData={tableData} />;
};

export default TableContainer;
