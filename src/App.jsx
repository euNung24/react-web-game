import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Snake from "./Snake/components/Snake";
import MineSearch from "./MineSearch/components/MineSearch";
import TicTacToe from "./TicTacToe/TicTacToe";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/snake" element={<Snake />} />
        <Route path="/mineSearch" element={<MineSearch />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
};

export default App;
