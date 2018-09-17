import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


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


class GuestAccountContainer extends React.Component {

  onLogoutClick= () => {
    this.props.dispatch({
      type: 'app/logout',
      payload: {
        userId: '',
      },
    });
  };

  render() {
    const { classes } = this.props;
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
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="headline" gutterBottom>
                  Hi {this.props.userName}, welcome to Olala!
                </Typography>
              </Grid>
              <Grid item>
                <Button onClick={this.onLogoutClick} className={classes.signinButton}> Log out </Button>
              </Grid>
            </Grid>
        </Grid>
      </Grid>
    );
  }
}

GuestAccountContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuestAccountContainer);