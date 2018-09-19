import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Link from 'umi/link';


const styles = {
  root: {
    textAlign: 'center',
    paddingTop: 100,
  },

  signupPaper: {
    paddingBottom: 3,
    margin: '0 26px',
  },

  iconTop: {
    marginBottom: 8,
  },
  
  textField: {
    width: '80%',
    marginBottom: 0,
    marginTop: 5,
    fontSize: 5
  },

  signupButton: {
    width:  '80%',
    background: 'linear-gradient(45deg, #CE367A 30%, #A55DA5 90%)',
    marginTop: 30,
    marginBottom: 24,
    height: 40,
    fontSize: 18
  },

  signinLink: {
    marginBottom: 8,
  }
};

class SignupContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      email: '',
      password: '',
    }
  }
  handleSubmit = () => {
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
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.signupPaper} elevation={2}>
        <Grid container spacing={0}>
             <Grid item xs={12}>
              <img
                src='https://res.cloudinary.com/xnchen/image/upload/v1535609591/olala/icon-top.png'
                width='100%'
                alt=''
                className={classes.iconTop}
              ></img>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='userName'
                label='&nbsp;User Name'
                value={this.state.userName}
                onChange={this.handleChange}
                className={classes.textField}
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='email'
                label='&nbsp;Email'
                value={this.state.email}
                onChange={this.handleChange}
                className={classes.textField}
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='password'
                label='&nbsp;Password'
                value={this.state.password}
                onChange={this.handleChange}
                className={classes.textField}
                type='password'
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                disableRipple
                color='primary'
                variant='contained'
                onClick={this.handleSubmit}
                className={classes.signupButton}
              >
                Sign up
              </Button>
            </Grid>
            <Grid item xs={12} className={classes.signinLink}>
              Already have Olala account? <Link to="/users/signin">Sign in</Link>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
  
}

SignupContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignupContainer);
