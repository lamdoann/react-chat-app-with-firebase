import { all } from 'redux-saga/effects';
import { saga as authorize } from './authorize';
import { saga as signup } from './signup';

export default function* rootSaga() {
  yield all([
    authorize(),
    signup(),
  ]);
}
