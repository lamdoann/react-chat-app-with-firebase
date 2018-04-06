import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Button, Form, Segment, Grid, Message, Header, Divider, Icon, Dimmer, Loader, Image } from 'semantic-ui-react';
import { createRequest as requestLogin } from '../actions';
import imageSources from '../../../assets/images';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.authenticateWithEmail = this.authenticateWithEmail.bind(this);
    this.authenticateWithGoogle = this.authenticateWithGoogle.bind(this);
  }
  
  authenticateWithGoogle(event) {
    event.preventDefault();
    this.props.onClick('google', {});
  }
  
  authenticateWithEmail(event) {
    event.preventDefault();
    const { email, password } = this;
    this.props.onClick('email', { email, password });
  }
  
  render() {
    const { isRequesting, isSuccess, isError } = this.props;
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
    isRequesting: state.authorization.isRequesting,
    isSuccess: state.authorization.isSuccess,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onClick: bindActionCreators(requestLogin, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
