import { createSelector } from 'reselect';

const loginFormSelector = state => state.ui.loginForm;

const authorizeSelector = state => state.authorize;

const getLoginForm = createSelector(
  loginFormSelector,
  (loginForm) => loginForm,
)

const getAuthorization = createSelector(
  [loginFormSelector, authorizeSelector],
  (loginForm, authorizeData) => ({ ...loginForm, ...authorizeData }),
);

export { getLoginForm, getAuthorization };
