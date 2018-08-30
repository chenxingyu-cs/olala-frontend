import React from 'react';
import { connect } from 'dva';
import GuestAccountContainer from '../../../components/users/GuestAccountContainer'

class SigninPage extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  render() {
    return (
      <div>
        <GuestAccountContainer dispatch={this.props.dispatch} />
      </div>
    );
  }
}

SigninPage.propTypes = {
};

export default connect()(SigninPage);
