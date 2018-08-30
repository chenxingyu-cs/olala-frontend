import React from 'react';
import { connect } from 'dva';
import SigninContainer from '../../../components/users/SigninContainer'

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
        <SigninContainer dispatch={this.props.dispatch} />
      </div>
    );
  }
}

SigninPage.propTypes = {
};

export default connect()(SigninPage);
