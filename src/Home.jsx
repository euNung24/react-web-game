import React from 'react';
import { Link } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';
import mineSearch from "./HeadImage/mineSearch.png";
import snake from "./HeadImage/snake.png";

const GlobalStyle = createGlobalStyle`
  body {
    background: #555;
  }
  a {
    color: #000;
    text-decoration: none;
    text-align: center;
  }
  a:hover {
    color: #cdcdcd;
  }
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  img {
    width: 400px;
    height: 300px;
    vertical-align: bottom;
  }
  .title {
    margin: 3rem;
    text-align: center;
    font-size: 2rem;
  }
  .game_lists {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .game_lists p {
    font-size: 20px;
    font-weight: bold;
  }
`

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <h2 className="title"><Link to="/">Web Games</Link></h2>
      <ul className="game_lists">
        <li>
          <Link to="/mineSearch">
            <img src={mineSearch} alt="지뢰찾기" />
            <p>지뢰찾기</p>
          </Link>
        </li>
        <li>
          <Link to="/snake">
            <img src={snake} alt="뱀게임" />
            <p>뱀게임</p>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;