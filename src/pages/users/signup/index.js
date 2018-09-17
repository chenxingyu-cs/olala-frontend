import React from 'react';
import { connect } from 'dva';
import SignupContainer from '../../../components/users/SignupContainer';


class SignupPage extends React.Component {
  
  render() {
    return (
      <div>
        <SignupContainer dispatch={this.props.dispatch} />
      </div>
    );
  }
  
}

SignupPage.propTypes = {
};

export default connect()(SignupPage);
