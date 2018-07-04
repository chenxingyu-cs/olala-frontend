import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


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

  componentDidMount() {
    this.props.dispatch({
      type: 'signup/create',
      payload: {
        page: 1,
      },
    });
  }

  handleSubmit = () => {
    console.log(this.state)
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
        <Paper className={styles.signupPaper} elevation={2}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="Email"
                value={this.state.email}
                onChange={this.handleChange}
                className={styles.textField}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="Password"
                value={this.state.password}
                onChange={this.handleChange}
                className={styles.textField}
                type="password"
                margin="normal"
              />
            </Grid>
          </Grid>
  
        </Paper>
        <div>
          <Button style={style.signup} onClick={this.handleSubmit}>Sign In</Button>
        </div>
      </div>
    );
  }
  
}

SigninPage.propTypes = {
};

export default connect()(SigninPage);
