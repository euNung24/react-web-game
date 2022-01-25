import React from "react";
import apple from "../images/apple.png";
import { StyledHeader } from "../Styles/StyledHeader";

const Header = ({ score }) => {
  return (
    <StyledHeader>
      <h2 className="name">Snake</h2>
      <img src={apple} alt="" />
      <span>{score}</span>
    </StyledHeader>
  );
};

export default Header;
