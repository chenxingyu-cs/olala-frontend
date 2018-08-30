import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SigninContainer from '../../../components/users/SigninContainer'

const style = {
  signup: {
    width: '220px',
    height: '40px',
    top: '-20px',
  },
  facebook: {
    background: '#3B598D',
    width: '220px',
    height: '40px',
  },
};

class SigninPage extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  // componentDidMount() {
  //   this.props.dispatch({
  //     type: 'signup/create',
  //     payload: {
  //       page: 1,
  //     },
  //   });
  // }

  handleSubmit = () => {
    console.log("ffffffffff")
    this.props.dispatch({
      type: 'signin/authenticate',
      payload: this.state,
    });
  }

  handleChange = event => {
    const name = event.target.id
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <div className={styles.normal}>
        <SigninContainer dispatch={this.props.dispatch}/>

      </div>
    );
  }
  
}

SigninPage.propTypes = {
};

export default connect()(SigninPage);
