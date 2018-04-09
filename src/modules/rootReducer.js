import { combineReducers } from 'redux';
import { reducer as authorization } from './authorize';
import { reducer as signup } from './signup';
import { reducer as entities } from './entities';
import ui from './ui';

export default combineReducers({
  authorization,
  signup,
  entities,
  ui,
});
