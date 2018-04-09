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
    token
  }
);

export const createRequest = (authType, { email, password }) => (
  {
    type: LOGIN_REQUEST,
    email,
    password,
    authType,
  }
);

export const createSuccess = (user) => {
  const { displayName, email, photoURL, uid } = user;
  return {
    type: LOGIN_SUCCESS,
    displayName,
    email,
    photoURL,
    uid,
  };
};

export const createError = (error) => {
  const { code, message } = error;
  return {
    type: LOGIN_ERROR,
    code,
    message,
  };
};
