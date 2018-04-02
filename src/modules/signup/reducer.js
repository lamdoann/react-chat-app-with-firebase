import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNUP_VALIDATED } from './actionTypes';

const initialState = {
  isRequesting: false,
  isError: false,
  isSuccess: false,
};

const reducer = (state = initialState, action) => {
  const { type, ...payloads } = action;

  switch (type) {
    case SIGNUP_REQUEST: {
      return {
        isRequesting: true,
        isError: false,
        isSuccess: false,
        ...payloads,
      };
    }

    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isRequesting: false,
        isError: false,
        isSuccess: true,
        ...payloads,        
      };
    }

    case SIGNUP_ERROR: {
      return {
        ...state,
        isRequesting: false,
        isError: true,
        isSuccess: false,
        ...payloads,
      };
    }

    case SIGNUP_VALIDATED: {
      return {
        ...state,
        isError: false,
        isValidated: true,
      }
    }

    default: 
      return state;
  }
};

export default reducer;
