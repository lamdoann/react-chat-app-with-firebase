import { combineReducers } from 'redux';
import { reducer as authorization } from './authorize';

export default combineReducers({
  authorization,
});