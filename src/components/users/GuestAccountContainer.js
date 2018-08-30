import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import router from 'umi/router';


const styles = theme => ({
  topImg: {
    marginTop: 36,
  },

  buttonContainer: {
    marginTop: 36,
    width: '100%',
  },

  signinButton: {
    border:' 1px solid #D2D2D2',
    width: 155,
    height: 44,
  },

  signupButton: {
    background: 'linear-gradient(45deg, #CE367A 30%, #A55DA5 90%)',
    color: 'white',
    width: 155,
    height: 44,
  },  
});

const signinOnClick= () => {
  router.push('/users/signin');
};

const signupOnClick= () => {
  router.push('/users/signup');
};

function GuestAccountContainer(props) {
  const { classes } = props;
  return (
    <Grid
      container
      spacing={8}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <img
          src={require('../../assets/signup_mobile.png')}
          width='100%'
          alt=''
          className={classes.topImg}
        />
        </Grid>

        <Grid item xs={12} className={classes.buttonContainer}>      
          <Grid
            container
            spacing={16}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Button onClick={signinOnClick} className={classes.signinButton}> Sign in </Button>
            </Grid>

            <Grid item>
              <Button onClick={signupOnClick} className={classes.signupButton}> Sign up </Button>
            </Grid>
          </Grid>
       </Grid>
    </Grid>
  );
}

GuestAccountContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuestAccountContainer);