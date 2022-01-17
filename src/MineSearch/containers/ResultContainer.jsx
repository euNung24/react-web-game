import React from "react";
import { useSelector } from "react-redux";

import Result from "../components/Result";

const ResultContainer = () => {
  const { halted, data } = useSelector((state) => ({
    halted: state.halted,
    data: state.data,
  }));
  return <>{halted && <Result data={data} />}</>;
};

export default ResultContainer;
