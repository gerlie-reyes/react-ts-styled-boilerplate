import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

function App() {
  /**
   * You can put your checking here to change the routes
   * depending on if the user is logged-in or not
   */
  return (
    <Router basename="/react-ts-styled-boilerplate/">
      <Routes />
    </Router>);
}

export default App;
