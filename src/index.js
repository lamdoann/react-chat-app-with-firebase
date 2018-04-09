import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import App from './App';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { firebaseConfig } from './config';
import { firebase } from './api';
import { actions } from './modules/authorize';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
firebase.initializeApp(firebaseConfig);

store.subscribe(() => console.log(store.getState()));

render(<App store={store} />, document.getElementById('root'));
