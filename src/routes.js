import React from 'react';
import App from './containers/AppContainer';
import Login from './components/Login';
import PrivateRouteContainer from './containers/PrivateRouteContainer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <PrivateRouteContainer path="/" component={App} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  )
};

export default Routes;
