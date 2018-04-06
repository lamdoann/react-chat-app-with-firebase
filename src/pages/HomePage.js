import React from 'react';
import { Grid, Container, Image } from 'semantic-ui-react';

// Check authorization state whether logged in or not

const HomePage = () => (
  <Container className="home-page">
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column width={4}>
          Info
        </Grid.Column>
        <Grid.Column width={12}>
          Status of users
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={4}>
          List of users
        </Grid.Column>
        <Grid.Column width={12}>
          Chatting Area
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default HomePage;
