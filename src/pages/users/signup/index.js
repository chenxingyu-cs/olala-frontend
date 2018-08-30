import React from 'react';
import { connect } from 'dva';
import SignupContainer from '../../../components/users/SignupContainer';


class SignupPage extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      fullName: '',
      password: '',
    }
  }

  handleSubmit = () => {
    console.log(this.state)
    this.props.dispatch({
      type: 'signup/create',
      payload: this.state,
    });
  }

  handleChange = event => {
    const name = event.target.id
    this.setState({ [name]: event.target.value });
  };

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
