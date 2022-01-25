import styled, { css } from "styled-components";

export const StyeldTd = styled.td`
  width: 1.3rem;
  height: 20px;
  ${(props) =>
    props.row + props.col === "evenodd" || props.row + props.col === "oddeven"
      ? css`
          background: #31b537;
        `
      : css`
          background: #4ad951;
        `};
  ${(props) =>
    props.num &&
    (props.row + props.col === "evenodd" || props.row + props.col === "oddeven"
      ? css`
          background: #ab966f;
        `
      : css`
          background: #dbbd86;
        `)};
  ${(props) =>
    props.first &&
    css`
      visibility: collapse;
    `};
  text-align: center;
  line-height: 0;
  position: relative;

  .fruit {
    width: 80%;
    height: 80%;
  }

  span {
    display: inline-block;
    background: #b83dba;
    border-radius: 30%;
  }

  .head {
    width: 90%;
    height: 90%;
    background: #850c87;
  }

  .body {
    width: 80%;
    height: 80%;
  }
`;
