import { take, fork, call, put, cancel, cancelled } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_ERROR, LOGOUT } from './actionTypes';
import { createSuccess, createError } from './actions';
import { firebase } from '../../api';

function* login() {
  try {
    const user = yield call(firebase.signInWithPopup);
    yield put(createSuccess(user));
  } catch (error) {
    yield put(createError(error));
  } finally {
    if (yield cancelled()) {
      console.log('handle cancelled action');
    }
  }
}

function* authorizeFlow() {
  while (true) {
    yield take(LOGIN_REQUEST);
    const task = yield fork(login);
    const action = yield take([LOGOUT, LOGIN_ERROR]);
    if (action.type === LOGOUT) {
      yield cancel(task);
    }
    // yield call(clearData) 
  }
}

export default authorizeFlow;
