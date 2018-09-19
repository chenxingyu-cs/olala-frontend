import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import CallIcon from '@material-ui/icons/Call';
import BookIcon from '@material-ui/icons/Book';
import { Row, Col } from 'antd';
import Grid from '@material-ui/core/Grid';
import router from 'umi/router';



const styles = theme => ({
  normal: {
    marginTop: 20,
  },
  button: {
    paddingLeft: 8,
    paddingRight: 8,
    width: '100%',
    height: 80,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function IconLabelButtons(props) {
  const { classes, userId } = props;

  const reviewLink = userId ? '/beautyProfessionals/review' : '/users/me';

  return (
    <div className={classes.normal}>
      <Row gutter={8}>
        <Col span={8} >
          <Button disableRipple variant="contained" color="primary" className={classes.button} onClick={() => router.push(reviewLink)}>
            <Grid
              container
              alignItems="center"
              direction="column"
              justify="center">
              <Grid item>
                <StarIcon className={classes.leftIcon} />
              </Grid>
              Review
            </Grid>
          </Button>

        </Col>
        <Col span={8} >
          <Button disableRipple variant="contained" color="primary" className={classes.button}>  
            <Grid
              container
              alignItems="center"
              direction="column"
              justify="center">
              <Grid item>
                <CallIcon className={classes.leftIcon} />
              </Grid>
              Call
            </Grid>
          </Button>
        </Col>
        <Col span={8} >
          <Button disableRipple variant="contained" color="primary" className={classes.button}>
            <Grid
              container
              alignItems="center"
              direction="column"
              justify="center">
              <Grid item>
                <BookIcon className={classes.leftIcon} />
              </Grid>
              Reserve
            </Grid>
          </Button>
        </Col>
      </Row>
    </div>
  );
}

IconLabelButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelButtons);