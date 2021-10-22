import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledHome = styled.div`
  ul {
    list-style: none;
    display: flex;
  }

  a {
    text-decoration: none;
    text-align: center;
  }

  img {
    width: 200px;
    height: 200px;
    vertical-align: bottom;
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <Link to="/">Home</Link>
      <ul>
        <li>
          <Link to="/mineSearch">
            <img src="./images/지뢰찾기.png" alt="지뢰찾기" />
            <p>지뢰찾기</p>
          </Link>
        </li>
      </ul>
    </StyledHome>
  );
};

export default Home;