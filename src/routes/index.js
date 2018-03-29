import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginPage, SignUpPage, HomePage } from '../pages';

const RootRoute = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route path="/signup" component={SignUpPage} />
    <Route path="/home" component={HomePage} />
  </Switch>
);

export default RootRoute;
