// ACTIONS

import axios from 'axios';

// ---------------------------------------------------------
// Actions 
// 2018-01-15 13:29
// ---------------------------------------------------------

// ---------------------------------------------------------
// TEST APPARATUS 
// ---------------------------------------------------------

// EXPRESS 

export const EXPRESS_TEST_START = "EXPRESS_TEST_START";
export const expressTestStart = () => {
    return { type: EXPRESS_TEST_START }
}

export const EXPRESS_TEST_RESULTS = "EXPRESS_TEST_RESULTS";
export const expressTestResults = (data) => {
    return { type: EXPRESS_TEST_RESULTS, data }
}

export const EXPRESS_TEST_ERROR = "EXPRESS_TEST_ERROR";
export const expressTestError = (data) => {
    return { type: EXPRESS_TEST_ERROR, data }
}

// DB

export const DB_TEST_START = "DB_TEST_START";
export const dbTestStart = () => {
    return { type: DB_TEST_START }
}
export const DB_TEST_RESULTS = "DB_TEST_RESULTS";
export const dbTestResults = (data) => {
    return { type: DB_TEST_RESULTS, data }
}
export const DB_TEST_ERROR = "DB_TEST_ERROR";
export const dbTestError = (data) => {
    return { type: DB_TEST_ERROR, data }
}

// ---------------------------------------------------------
// GET BOARDS
// ---------------------------------------------------------

export const GET_BOARDS_START = "GET_BOARDS_START";
export const getBoardsStart = () => {
    return { type: GET_BOARDS_START }
}
export const GET_BOARDS_RESULTS = "GET_BOARDS_RESULTS";
export const getBoardsResults = (data) => {
  return { type: GET_BOARDS_RESULTS, data }
}
export const GET_BOARDS_ERROR = "GET_BOARDS_ERROR";
export const getBoardsError = (data) => {
    return { type: GET_BOARDS_ERROR, data }
}

// ---------------------------------------------------------
// Thunks 
// 2018-01-15 13:27
// ---------------------------------------------------------

export const EXPRESS_TEST = "EXPRESS_TEST";
export const expressTest = () => {
    return dispatch => {
        dispatch(expressTestStart());
        axios.get(`/api/express-test`)
            .then(res => dispatch(expressTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(expressTestError(err)))
    }
}

export const DB_TEST = "DB_TEST"
export const dbTest = () => {
    return dispatch => {
        dispatch(dbTestStart());
        axios.get(`/api/users`)
            .then(res => dispatch(dbTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(dbTestError(err)))

    }
}

const USER_ID = 1;
export const GET_BOARDS = "GET_BOARDS"
export const getBoards = () => {
    return dispatch => {
        dispatch(getBoardsStart());
        axios.get(`/api/boards?user=${USER_ID}`)
            .then(res => dispatch(getBoardsResults(JSON.stringify(res.data))))
            .catch(err => dispatch(getBoardsError(err)))
    }
}
