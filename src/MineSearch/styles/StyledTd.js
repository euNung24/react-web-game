import styled, { css } from "styled-components";

export const StyeldTd = styled.td`
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
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}px;
  text-align: center;
  line-height: 0;
  span {
    color: #fff;
  }
`;
