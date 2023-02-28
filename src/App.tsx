import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const App: React.FC = () => {
  /**
   * You can put your checking here to change the routes
   * depending on if the user is logged-in or not
   */
  return (
    <Router basename='/'>
      <Routes />
    </Router>
  );
};

export default App;
