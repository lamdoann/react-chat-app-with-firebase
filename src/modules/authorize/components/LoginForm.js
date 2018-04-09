import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Button, Form, Segment, Grid, Message, Header, Divider, Icon, Dimmer, Loader, Image } from 'semantic-ui-react';
import { onLogin } from '../actions';
import { getAuthorization, getLoginForm } from '../selectors';
import imageSources from '../../../assets/images';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.authenticateWithEmail = this.authenticateWithEmail.bind(this);
    this.authenticateWithGoogle = this.authenticateWithGoogle.bind(this);
  }
  
  authenticateWithGoogle(event) {
    event.preventDefault();
    this.props.onClick({ authType: 'google' });
  }
  
  authenticateWithEmail(event) {
    event.preventDefault();
    const { email, password } = this;
    this.props.onClick({ authType: 'email', email, password });
  }
  
  render() {
    const { isRequesting, isSuccess, isError, message } = this.props.loginForm;
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
            <Form size='large' error={isError} >
             <Segment stacked>
              <Form.Input
                fluid
                type='email'
                icon='user'
                iconPosition='left'
                placeholder='email'
                onChange={(event) => { this.email = String(event.target.value).trim() }}
                />
              <Form.Input
                fluid
                type='password'
                icon='lock'
                iconPosition='left'
                placeholder='password'
                onChange={(event) => { this.password = String(event.target.value).trim() }}
                />
              <Button animated fluid basic color='teal' size='medium' onClick={this.authenticateWithEmail}>Login</Button>
              <Divider horizontal>or</Divider>
              <Button fluid color='google plus' size='medium' onClick={this.authenticateWithGoogle}>
                <Icon name='google plus' /> 
                Google
              </Button>
              <Message error content={message} />
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
}

const mapStateToProps = (state) => (
  {
    loginForm: getLoginForm(state),
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onClick: bindActionCreators(onLogin, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
