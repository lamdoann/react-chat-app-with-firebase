import { take, fork, call, put, cancel, cancelled } from 'redux-saga/effects';
import { LOGIN, LOGIN_REQUEST, LOGIN_ERROR, LOGOUT } from './actionTypes';
import { onSuccess } from './actions';
import { firebase, database } from '../../api';
import { actions as loginActions, actionTypes as loginActionTypes } from '../ui/login-form';

function* login(email, password, authType) {
  try {
    yield put(loginActions.onRequest());
    let user = null;
    if (authType === 'google') {
      user = yield call(firebase.signInWithPopup);
    } else {
      user = yield call(firebase.signInWithEmail, email, password);
    }
    // const saved = yield call(database.saveUser, user);
    yield put(loginActions.onSuccess());
    yield put(onSuccess(user));
  } catch (error) {
    yield put(loginActions.onError(error.message));
  } finally {
    if (yield cancelled()) {
      console.log('handle cancelled action');
    }
  }
}

function* authorizeFlow() {
  while (true) {
    const { email, password, authType } = yield take(LOGIN);
    const task = yield fork(login, email, password, authType);
    const action = yield take([LOGOUT, loginActionTypes.LOGIN_FORM_ERROR]);
    if (action.type === LOGOUT) {
      yield cancel(task);
    }
    // yield call(clearData) 
  }
}

export default authorizeFlow;
