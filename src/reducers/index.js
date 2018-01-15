import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as reducers from './demo';

const Reducers = combineReducers({
    ...reducers,
    routing: routerReducer
});

export default Reducers;
