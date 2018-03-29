import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from './actionTypes';

const createRequest = ({ username, password, fullname }) => (
  {
    type: SIGNUP_REQUEST,
    username,
    password,
    fullname,
  }
);

const createSuccess = () => (
  {
    type: SIGNUP_SUCCESS,
  }
);

const createError = ({ message }) => (
  {
    type: SIGNUP_ERROR,
    message,
  }
);

export { createRequest, createSuccess, createError };
