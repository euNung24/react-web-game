import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Snake from "./Snake/components/Snake";
import MineSearch from "./MineSearch/components/MineSearch";

const App = () => {
  return (
    <Router>
      <Route path="/" exact={true} component={Home} />
      <Route path="/snake" component={Snake} />
      <Route path="/mineSearch" component={MineSearch} />
    </Router>
  );
};

export default App;