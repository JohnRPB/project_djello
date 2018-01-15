import React from 'react';
import App from './containers/AppContainer';
import About from './components/About/About';
import FeatureTestContainer from './containers/FeatureTestContainer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
    <Switch>
      <Route exact path="/feature-test" component={FeatureTestContainer} />
      <Route exact path="/about" component={About} />
      <Route path="/" component={App} />
    </Switch>
      </div>
    </Router>
  )
};

export default Routes;
