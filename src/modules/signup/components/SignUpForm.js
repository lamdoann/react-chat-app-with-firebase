import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Header, Segment, Form, Button, Message, Dimmer, Loader } from 'semantic-ui-react';
import { createRequest } from '../actions';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const fakeUser = { email: 'iamlamdoan@gmail.com', password: '123456', fullname: 'Lam Doan' };
    this.props.onClick(fakeUser);
  }

  render() {
    const { isSuccess, isRequesting, isError, message } = this.props;
    console.log(isSuccess, isError, message);
    return (
      <div className='signup-form'>
        <Dimmer active={isRequesting}>
          <Loader>Creating...</Loader>
        </Dimmer>
        <Grid
          textAlign='center'
          verticalAlign='middle'
          style={{ height: '100%' }}
        >
          <Grid.Column style={{ maxWidth: 400 }}>
            <Header as='h2' textAlign='center' color='teal'>
              Sign Up
            </Header>
            <Form success={isSuccess} error={isError} onSubmit={this.onClick}>
              <Segment stacked>
                <Form.Input
                  type='text'
                  icon='user'
                  iconPosition='left'
                  placeholder='full name'
                  fluid
                  required
                />
                <Form.Input
                  type='email'
                  icon='mail'
                  iconPosition='left'
                  placeholder='email'
                  fluid
                  required
                />
                <Form.Input
                  type='password'
                  icon='lock'
                  iconPosition='left'
                  placeholder='password'
                  fluid
                  required
                />
                <Button
                  fluid
                  color='teal'
                  size='medium'
                  onClick={this.onClick}
                >
                  Create a new account
                </Button>
                <Message success content='Your account has been created.'/>
                <Message error content={message}/>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

SignUpForm.propTypes = {

};

const mapStateToProps = (state) => (
  {
    isRequesting: state.signup.isRequesting,
    isError: state.signup.isError,
    isSuccess: state.signup.isSuccess,
    message: state.signup.message,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onClick: bindActionCreators(createRequest, dispatch),
  }
);

SignUpForm = connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

export default SignUpForm;
