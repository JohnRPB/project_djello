import React from 'react';
import {connect} from 'react-redux';
import PrivateRoute from '../PrivateRouter';

// makes gene a sandwich

const mapStateToProps = (state) => {
  return {
    loggedIn: state.isLoggedIn
  }
}

const PrivateRouteContainer = connect(mapStateToProps, null)(PrivateRoute);

export default PrivateRouteContainer;

