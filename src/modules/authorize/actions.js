import { LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS } from './actionTypes';

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


function thunk(username) {
  return (dispatch) => {
    dispatch(createRequest());

    api(() => dispatch(createSuccess()))
  }
}


