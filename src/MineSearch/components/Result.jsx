import React from "react";
import { useDispatch } from "react-redux";
import { setLevel } from "../actions/actions";
import { StyledResult, StyledStartBtn } from "../styles/StyledResult";

const Result = ({ data }) => {
  const dispatch = useDispatch();

  const startGame = () => {
    const { row, col, mine } = data;
    dispatch(setLevel(row, col, mine));
  };
  return (
    <StyledResult>
      <StyledStartBtn onClick={startGame}>다시하기</StyledStartBtn>
    </StyledResult>
  );
};

export default Result;
