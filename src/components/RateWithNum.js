import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StarRatingComponent from 'react-star-rating-component';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  normal: {
    marginBottom: -8,
  },
});

function RateWithNum(props) {
  const { classes, rate, number } = props;
  return (
    <Grid
      container
      spacing={8}
      className={classes.normal}
      alignItems="flex-start"
      direction="row"
      justify="flex-start">
      <Grid item>
        <StarRatingComponent
          name="overallRate"
          editing={false}
          value={rate}
        />
      </Grid>
      <Grid item>
        <span>{number} reviews</span>
      </Grid>
    </Grid>
  );
}

RateWithNum.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RateWithNum);