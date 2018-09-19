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
    paddingTop: 120,
  },

  signinPaper: {
    paddingBottom: 3,
    margin: '0 26px',
  },
  
  textField: {
    width: '80%',
    marginBottom: 0,
    marginTop: 5,
    fontSize: 5
  },

  signinButton: {
    width:  '80%',
    background: 'linear-gradient(45deg, #CE367A 30%, #A55DA5 90%)',
    marginTop: 30,
    marginBottom: 24,
    height: 40,
    fontSize: 18
  },

  signupLink: {
    marginBottom: 8,
  }
};

class SigninContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = () => {
    console.log('login submin')
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
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.signinPaper} elevation={2}>
        <Grid container spacing={0}>
             <Grid item xs={12}>
              <img
                src='https://res.cloudinary.com/xnchen/image/upload/v1535609591/olala/icon-top.png'
                width='100%'
                alt=''
              ></img>
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
                className={classes.signinButton}
              >
                Sign In
              </Button>
            </Grid>
            <Grid item xs={12} className={classes.signupLink}>
              New to Olala? <Link to="/users/signup">Sign up</Link>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
  
}

SigninContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SigninContainer);
