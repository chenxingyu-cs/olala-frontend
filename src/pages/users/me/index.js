import React from 'react';
import { connect } from 'dva';
import GuestAccountContainer from '../../../components/users/GuestAccountContainer';
import MemberHubContainer from '../../../components/users/MemberHubContainer';

class SigninPage extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  render() {
    const { userId } = this.props;

    const guestPage = (
      <GuestAccountContainer dispatch={this.props.dispatch} />
    );

    const loginUserPage = (
      <MemberHubContainer dispatch={this.props.dispatch} userName={this.props.userName} />
    )

    console.log('GuestPage', userId)
    const demo = userId ? loginUserPage : guestPage
    return (
      <div>
        {demo}
      </div>
      
    );
  }
}

SigninPage.propTypes = {
};

function mapStateToProps(state) {
  const { userId, userName } = state.app;
  // console.log('listhaha', list)
  return {
    userId,
    userName
  };
}

export default connect(mapStateToProps)(SigninPage);
