import { LOGIN_FORM_REQUEST, LOGIN_FORM_SUCCESS, LOGIN_FORM_ERROR } from './actionTypes';

export const onRequest = () => (
  {
    type: LOGIN_FORM_REQUEST,
  }
);

export const onSuccess = () => (
  {
    type: LOGIN_FORM_SUCCESS,
  }
);

export const onError = (message) => (
  {
    type: LOGIN_FORM_ERROR,
    message,
  }
);
