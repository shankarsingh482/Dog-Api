import * as actionTypes from '../helpers/actionTypes';

export const apiCallRequest = () => {
    return { type: actionTypes.API_CALL_REQUEST };
  }
export const apiCallSuccess = data => {
    return { type: actionTypes.API_CALL_SUCCESS, data };
  }
export const apiCallFailure = error => {
    return { type: actionTypes.API_CALL_FAILURE, error };
  }