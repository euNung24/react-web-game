import styled from "styled-components";

export const StyledTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
  padding: 20px;
  box-sizing: border-box;
  -webkit-box-pack: center;
  table {
    border-collapse: collapse;
    width: 30vw;
    min-width: 340px;
  }
`;
