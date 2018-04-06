import { List, Image } from 'semantic-ui-react';

const MemberItem = ({ email, fullname, photoURL, isActive }) => (
  <List.Item>
    <Image avatar src={photoURL} />
    <List.Content>
      <List.Header as='a'>{email}</List.Header>
      <List.Description>Something just like this {fullname}</List.Description>
    </List.Content>
  </List.Item>
);