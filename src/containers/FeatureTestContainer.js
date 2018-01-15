import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import FeatureTest from '../components/FeatureTest.js'

function mapStateToProps(state) {
  return {
    results: state.demo.results
  }
}

function mapDispatchToProps(dispatch) {
  
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatureTest);
