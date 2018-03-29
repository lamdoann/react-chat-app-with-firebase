import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createRequest as requestLogin } from '../actions';

const mapDispatchToProps = dispatch => (
  {
    onClick: bindActionCreators(requestLogin, dispatch),
  }
);

let LoginButton = ({ onClick }) => (
  <Button fluid color='google plus' onClick={onClick}>
    <Icon name='google plus' /> Login
  </Button>
);

LoginButton = connect(null, mapDispatchToProps)(LoginButton);

export default LoginButton;
