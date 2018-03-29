import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Segment, Form, Button, Message } from 'semantic-ui-react';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='signup-form'>
        <Grid
          textAlign='center'
          verticalAlign='middle'
          style={{ height: '100%' }}
        >
          <Grid.Column style={{ maxWidth: 400 }}>
            <Header as='h2' textAlign='center' color='teal'>
              Sign Up
            </Header>
            <Form success>
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
                <Button fluid color='teal' size='medium'>Create a new account</Button>
                <Message success content='Your account has been created.'/>
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

export default SignUpForm;
