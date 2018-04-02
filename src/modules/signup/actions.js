import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNUP_VALIDATED } from './actionTypes';

const createRequest = ({ email, password, fullname }) => (
  {
    type: SIGNUP_REQUEST,
    email,
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

const createValidator = () => (
  {
    type: SIGNUP_VALIDATED,
  }
)

export { createRequest, createSuccess, createError, createValidator };
