import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Row, Col } from 'antd';
import deepOrange from '@material-ui/core/colors/deepOrange';
import StarRatingComponent from 'react-star-rating-component';
import Avatar from '@material-ui/core/Avatar';


const styles = theme => ({
  card: {
    marginTop: 20,
  },
  reviewCard: {
    margin: '8px 0 0 0',
    padding: '8px 0 8px 0',
  },
  reviewer: {
    marginBottom: 4,
  },
  rateNum: {
    padding: '0 0 0 4px',
  },
  orangeAvatar: {
    color: '#fff',
    backgroundColor: deepOrange[500],
    width: 20,
    height: 20,
  },
  reviewerAvator: {
    marginBottom: 4,
  },
  rateContent: {
    display: 'flex',
    paddingBottom: 4,
  },
});

function BeautyProfessionalReviews(props) {
  const { classes, reviews } = props;

  if (reviews == null || reviews.length === 0) return null;

  const reviewDiv = reviews.map(review => {
    const createAtTime = review.createdAt && new Date(review.createdAt).toLocaleDateString();
    return (
      <Card className={classes.reviewCard} key={review._id}>
        <CardContent className={classes.content}>
          <Row type="flex" justify="space-around" align="middle" className={classes.reviewer}>
            <Col span={2}>
              <Avatar className={classes.orangeAvatar}>{review.reviewerName[0]}</Avatar>
            </Col>
            <Col span={22}>
              <div className={classes.reviewerName}>{review.reviewerName}</div>
            </Col>
          </Row>

          <div className={classes.rateContent}>
            <StarRatingComponent
              name="overallRate"
              editing={false}
              value={review.score}
            />
            <span className={classes.rateNum}>{createAtTime}</span>
          </div>
          <div>{review.content}</div>
        </CardContent>

      </Card>
    );
  });

  return (
    <div className={classes.card}>
      <Typography variant="subheading" gutterBottom>
        Reviews
      </Typography>
      {reviewDiv}
    </div>
  );
}

BeautyProfessionalReviews.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BeautyProfessionalReviews);