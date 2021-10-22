import React from 'react';
import MineSearch from './MineSearch/MineSearch';
import { Route, Link } from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <div>
      <Route path="/mineSearch" component={MineSearch} />
      <Route path="/" exact={true} component={Home} />
    </div>
  );
};

export default App;