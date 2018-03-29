import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Button, Form, Segment, Grid, Message, Header, Divider, Icon, Dimmer, Loader, Image } from 'semantic-ui-react';
import { createRequest as requestLogin } from '../actions';
import imageSources from '../../../assets/images';

const mapStateToProps = (state) => (
  {
    isRequesting: state.authorization.isRequesting,
    isSuccess: state.authorization.isSuccess,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onClick: bindActionCreators(requestLogin, dispatch),
  }
);

let LoginForm = ({ isRequesting, isSuccess, onClick }) => {
  if (isSuccess) {
    return (<Redirect to='/home' />)
  }
  
  return (
    <div className='login-form'>
      <Dimmer active={isRequesting}>
        <Loader content='Waiting' size='large'/>
      </Dimmer>
      <Grid
        textAlign='center'
        verticalAlign='middle'
        style={{ height: '100%' }}
      >
        <Grid.Column style={{ maxWidth: 400 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src={imageSources.logo} />
            {' '} Firebase Chat
          </Header>
          <Form size='large'>
           <Segment stacked>
            <Form.Input
              fluid
              type='email'
              icon='user'
              iconPosition='left'
              placeholder='email'
            />
            <Form.Input
              fluid
              type='password'
              icon='lock'
              iconPosition='left'
              placeholder='password'
            />
            <Button animated fluid basic color='teal' size='medium'>Login</Button>
            <Divider horizontal>or</Divider>
            <Button fluid color='google plus' size='medium' onClick={onClick}>
              <Icon name='google plus' /> 
              Google
            </Button>
           </Segment>
          </Form>
          <Message>
            New to us? <Link to='/signup'>Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
} 

LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginForm;
