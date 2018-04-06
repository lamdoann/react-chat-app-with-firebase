import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List } from 'semantic-ui-react';
import MessageItem from './MemberItem';

const MemberList = ({ memebers }) => (
  <List>
    {memebers.map((member) => (<MemberItem key={member.uid} {...member} />))}
  </List>
);

const mapStateToProps = (state) => (
  {

  }
);

const mapDispatchToProps = (dispatch) => (
  {

  }
);

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);