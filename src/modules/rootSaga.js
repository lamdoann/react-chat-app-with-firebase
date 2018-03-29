import { all } from 'redux-saga/effects';
import { saga as authorize } from './authorize';

export default function* rootSaga() {
  yield all([
    authorize(),
  ]);
}
