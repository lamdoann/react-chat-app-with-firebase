import { LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS } from './actionTypes';

export const createRequest = () => (
  {
    type: LOGIN_REQUEST,
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


