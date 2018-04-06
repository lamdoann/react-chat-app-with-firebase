import { USERS_SET } from './actionTypes';

export function setNewUser({ email, displayName, photoURL }) {
  return {
    type: USERS_SET,
    uid,
    email,
    displayName,
    photoURL,
  };
}
