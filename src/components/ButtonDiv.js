import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import CallIcon from '@material-ui/icons/Call';
import BookIcon from '@material-ui/icons/Book';
import { Row, Col } from 'antd';


const styles = theme => ({
  button: {
    // margin: theme.spacing.unit,
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
  const { classes } = props;
  return (
    <div>
      <Row gutter={8}>
        <Col span={8} >
          <Button variant="contained" color="default" className={classes.button}>
            <StarIcon className={classes.leftIcon} />
            Review
          </Button>
        </Col>
        <Col span={8} >
          <Button variant="contained" color="default" className={classes.button}>
            <CallIcon className={classes.leftIcon} />
            Call
          </Button>
        </Col>
        <Col span={8} >
          <Button variant="contained" color="default" className={classes.button}>
            <BookIcon className={classes.leftIcon} />
            Reserve
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