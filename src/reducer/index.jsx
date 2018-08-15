import * as actionTypes from '../helpers/actionTypes';

const initialState = {
    fetching: false,
    dog: null,
    error: null,
    count: 0,
  };
  
  export function reducer(state = initialState, action) {
    switch (action.type) {
      case actionTypes.API_CALL_REQUEST:
        return { ...state, fetching: true, error: null };
      case actionTypes.API_CALL_SUCCESS:
        return { ...state, fetching: false, dog: action.dog, count: state.count + 1 };
      case actionTypes.API_CALL_FAILURE:
        return { ...state, fetching: false, dog: null, error: action.error };
      default:
        return state;
    }
  }