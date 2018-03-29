import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginPage } from '../pages';

const RootRoute = () => (
  <Switch>
    <Route path="/" component={LoginPage} />
  </Switch>
);

export default RootRoute;
