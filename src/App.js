import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import RootRoute from './routes';
import {} from './assets/styles/main.less';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <RootRoute />
    </Router>
  </Provider>
);

export default App;
