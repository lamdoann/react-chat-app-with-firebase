import { combineReducers } from 'redux';
import { reducer as authorization } from './authorize';
import { reducer as signup } from './signup';

export default combineReducers({
  authorization,
  signup,
});