// REDUCERS 

import {combineReducers} from 'redux';

import { EXPRESS_TEST_RESULTS, DB_TEST_RESULTS, EXPRESS_TEST_ERROR, DB_TEST_ERROR, GET_BOARDS_RESULTS, GET_BOARDS_ERROR } from '../actions';

let initialState = {
  demo: {
    testResults: ""
  },
  boards: [],

}

export const demo = (state = initialState.demo, action) => {
    switch (action.type) {
        case EXPRESS_TEST_RESULTS:
            return { testResults: "Test Succeeded!  " + action.data }
        case DB_TEST_RESULTS:
            return { testResults: "Test Succeeded!  " + action.data }
        case EXPRESS_TEST_ERROR:
            return { testResults: "Test Failed!  " + action.data }
        case DB_TEST_ERROR:
            return { testResults: "Test Failed!  " + action.data }
        default:
            return state
    }
}

export const boards = (state = initialState.boards , action) => {
  switch(action.type) {
    case GET_BOARDS_RESULTS:
      return [...action.data]; 
    default:
      return state
  }
}


