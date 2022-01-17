import React from "react";
import { useSelector } from "react-redux";

import Tr from "../components/Tr";

const TrContainer = ({ rowIndex, rowData }) => {
  const { data } = useSelector((state) => ({
    data: state.data,
  }));
  return <Tr data={data} rowIndex={rowIndex} rowData={rowData} />;
};

export default TrContainer;
