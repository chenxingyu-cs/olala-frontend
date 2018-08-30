import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
  },

  signupPaper: {
    paddingBottom: 3,
    margin: '0 26px',
  },
  
  textField: {
    width: '90%',
  },
};

class Signin extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }
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
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.signupPaper} elevation={2}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <TextField
                id='email'
                label='Email'
                value={this.state.email}
                onChange={this.handleChange}
                className={classes.textField}
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='password'
                label='Password'
                value={this.state.password}
                onChange={this.handleChange}
                className={classes.textField}
                type='password'
                margin='normal'
              />
            </Grid>
          </Grid>
  
        </Paper>
        <div>
          <Button
            color='primary'
            variant='contained'
            onClick={this.handleSubmit}
          >
            Sign In
          </Button>
        </div>
      </div>
    );
  }
  
}

Signin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signin);
