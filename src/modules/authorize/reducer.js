import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './actionTypes';

const initialState = {
  isRequesting: false,
  isError: false,
  isSuccess: false,
};

const reducer = function (state = initialState, action) {
  const { type, ...payloads } = action;
  
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        ...payloads,
        isRequesting: true,
        isError: false,
        isSuccess: false,
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        ...payloads,
        isRequesting: false,
        isError: false,
        isSuccess: true,
      };
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        ...payloads,
        isRequesting: false,
        isError: true,
        isSuccess: false,
      }
    }

    default:
      return state;
  }
};

export default reducer;
