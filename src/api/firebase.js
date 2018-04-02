import firebase from 'firebase';

const initializeApp = function (config) {
  firebase.initializeApp(config);
};

async function signInWithEmail(email, password) {
  const user = await firebase.auth().signInWithEmailAndPassword(email, password);
  return user;
}

async function signInWithPopup() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const { user } = await firebase.auth().signInWithPopup(provider);
  return user;
}

async function createUser({ email, password, fullname }) {
  const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
  return user;
}

export {
  initializeApp,
  signInWithPopup,
  createUser,
  signInWithEmail
};
