import { put, call, takeLatest } from 'redux-saga/effects';
import { createRequest, createSuccess, createError } from './actions';
import { SIGNUP_REQUEST } from './actionTypes';
import { firebase } from '../../api'

function* signUp(action) {
  try {
    const user = yield call(firebase.createUser, action);
    yield put(createSuccess());
  } catch (error) {
    yield put(createError(error));
  }
}

function* watchSignUp() {
  yield takeLatest(SIGNUP_REQUEST, signUp);
}

export default watchSignUp;
