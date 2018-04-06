import { take, fork, call, put, cancel, cancelled } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_ERROR, LOGOUT } from './actionTypes';
import { createSuccess, createError } from './actions';
import { firebase, database } from '../../api';

function* login(email, password, authType) {
  try {
    let user = null;
    if (authType === 'google') {
      user = yield call(firebase.signInWithPopup);
    } else {
      user = yield call(firebase.signInWithEmail, email, password);
    }
    // const saved = yield call(database.saveUser, user);
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
    const { email, password, authType } = yield take(LOGIN_REQUEST);
    const task = yield fork(login, email, password, authType);
    const action = yield take([LOGOUT, LOGIN_ERROR]);
    if (action.type === LOGOUT) {
      yield cancel(task);
    }
    // yield call(clearData) 
  }
}

export default authorizeFlow;
