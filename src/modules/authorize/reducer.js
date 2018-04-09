import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './actionTypes';

const initialState = {};

const reducer = function (state = initialState, action) {
  const { type, ...payloads } = action;
  
  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        ...payloads,
      };
    }

    default:
      return state;
  }
};

export default reducer;
