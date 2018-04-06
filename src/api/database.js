import firebase from 'firebase';

export async function saveUser({ uid, email, displayName, photoURL }) {
  firebase.database().ref('users').on('value').then((user) => console.log('user list', user));
  return await firebase.database().ref(`users/${uid}`).update({ uid, email, displayName, photoURL });
}

export async function deleteUser(uid) {
  return await firebase.database().ref(`users/${uid}`).remove();
}
