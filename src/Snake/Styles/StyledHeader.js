import styled from "styled-components";

export const StyledHeader = styled.header`
  background: #215826;
  position: relative;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 20px;

  h2 {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    margin: 0 10px;
  }

  img {
    width: 50px;
    height: 50px;
  }

  span {
    font-size: 45px;
    font-weight: 600;
  }
`;
