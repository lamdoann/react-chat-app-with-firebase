import { LOGIN, LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS } from './actionTypes';

export const onLogin = ({ authType, email, password }) => (
  {
    type: LOGIN,
    authType,
    email,
    password,
  }
);

export const onSuccess = (user) => (
  {
    type: LOGIN_SUCCESS,
    displayName,
    email,
    photoURL,
    uid,
    token,
  }
);

