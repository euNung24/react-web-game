import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: #296b29;
}

input {
  position: absolute;
  top: -100px;
  right: -100px;
}

.startBtn {
  ${(props) =>
    !props.start
      ? css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          border: none;
          background: #4dbec4;
          width: 110px;
          height: 75px;
          border-radius: 5px;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
          font-size: 24px;
          font-weight: bold;
        `
      : css`
          visibility: hidden;
        `}
}
`;
