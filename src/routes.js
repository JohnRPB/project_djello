import React from 'react';
import App from './containers/AppContainer';
import Login from './components/Login';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  )
};

export default Routes;
