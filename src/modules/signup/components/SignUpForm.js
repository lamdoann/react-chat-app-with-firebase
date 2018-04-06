import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Header, Segment, Form, Button, Message, Dimmer, Loader } from 'semantic-ui-react';
import { createRequest, createError, createSuccess, createValidator } from '../actions';
import combineValidators, { createValidatorWith, isRequired, isEmail, withValidatorHandler } from '../../../helper/validators';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.validatorHandler = this.validatorHandler.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    const { fullname, email, password } = this;
    this.props.onClick({
      fullname,
      email,
      password,
    });
  }

  validatorHandler(message) {
    if (message) {
      this.props.onError({ message });
    } else {
      this.props.onValidator();
    }
  }

  render() {
    const { isSuccess, isRequesting, isError, message } = this.props;
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
                  onChange={(event) => { this.fullname = String(event.target.value).trim() }}
                />
                <Form.Input
                  type='email'
                  icon='mail'
                  iconPosition='left'
                  placeholder='email'
                  fluid
                  required
                  onChange={(event) => { this.email = String(event.target.value).trim() }}
                />
                <Form.Input
                  type='password'
                  icon='lock'
                  iconPosition='left'
                  placeholder='password'
                  fluid
                  required
                  onChange={(event) => { this.password = String(event.target.value).trim() }}
                />
                <Button
                  fluid
                  color='teal'
                  size='medium'
                  onClick={this.onClick}
                >
                  Create a new account
                </Button>
                <Message success>
                  Your account has been created.
                  <Link to='/' replace>{' Login '}</Link>
                </Message>
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
    onError: bindActionCreators(createError, dispatch),
    onValidator: bindActionCreators(createValidator, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
