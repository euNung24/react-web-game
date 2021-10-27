import React from 'react';
import MineSearch from './MineSearch/MineSearch';
import { Route } from 'react-router-dom';
import Home from './Home';
import Snake from './Snake/Snake';

const App = () => {
  return (
    <div>
      <Route path="/snake" component={Snake} />
      <Route path="/mineSearch" component={MineSearch} />
      <Route path="/" exact={true} component={Home} />
    </div>
  );
};

export default App;