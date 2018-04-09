import { LOGIN_FORM_REQUEST, LOGIN_FORM_SUCCESS, LOGIN_FORM_ERROR } from './actionTypes';

const initialState = {
  isRequesting: false,
  isError: false,
  isSuccess: false,
  message: null,
};

export default function reducer(state = initialState, action) {
  const { type, ...payload } = action;
  switch (type) {
    case LOGIN_FORM_REQUEST: 
      return {
        isRequesting: true,
        isSuccess: false,
        isError: false,
        message: null,
      };

    case LOGIN_FORM_SUCCESS: 
      return {
        isRequesting: false,
        isSuccess: true,
        isError: false,
        message: null,
      };

    case LOGIN_FORM_ERROR: 
      return {
        isRequesting: false,
        isSuccess: false,
        isError: true,
        message: payload.message,
      };

    default:
      return state;
  }
}
