import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({logged, path, component}) => {
  return (
  logged ? <Route exact path={`${path}`} component={component} /> : 
    <Redirect to='/login' /> 
  )
}

export default PrivateRoute;
