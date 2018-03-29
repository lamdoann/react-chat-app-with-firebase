import { put, call, takeLatest } from 'redux-saga/effects';
import { createRequest, createSuccess, createError } from './actions';
import { SIGNUP_REQUEST } from './actionTypes';
import { firebase } from '../../api'

function* signUp() {
  try {

  } catch (error) {

  }
}

function* watchSignUp() {
  yield takeLatest(SIGNUP_REQUEST, signUp);
}