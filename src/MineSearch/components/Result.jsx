import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setLevel } from "../actions/actions";

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
`;

const StyledStartBtn = styled.button`
  background: #355b71;
  position: absolute;
  padding: 15px 20px;
  border: none;
  border-radius: 3px;
  font-size: 32px;
  color: #fff;
  font-weight: 400;
  cursor: pointer;
`;

const Result = ({ data }) => {
  const dispatch = useDispatch();

  const startGame = () => {
    const { row, col, mine } = data;
    dispatch(setLevel(row, col, mine));
  };
  return (
    <StyledDiv>
      <StyledStartBtn onClick={startGame}>다시하기</StyledStartBtn>
    </StyledDiv>
  );
};

export default Result;
