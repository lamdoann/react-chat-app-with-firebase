import { debounce } from 'lodash';

const isRequired = (event) => {
  return (event.target.required ? undefined : 'Required');
}

const isEmail = (event) => {  
  const result =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(event.target.value) ? undefined : 'Invalid email address';
  return result;
};

const combineValidators = (...validators) => (event) => {
  let error;
  try {
    for (const validator of validators) {
      const message = validator(event);
      if (message) {
        error = message;
      }
    }
  } catch (error) {
    error = error.message;
  }

  return error;
};

const createValidatorWith = validator => event => validator(event);

const withValidatorHandler = handler => validator => (event) => {
  const error = validator(event);
  handler(error);
};

export { isRequired, isEmail, createValidatorWith, withValidatorHandler };

export default combineValidators;


