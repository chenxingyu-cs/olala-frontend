import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import StarRatingComponent from 'react-star-rating-component';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  main: {
    margin: '8px',
    border: '1px solid #CCC',
    borderRadius: '3px',
    padding: '8px',
  },
  rating: {
    padding: '8px',
    borderBottom: '1px solid #CCC',
    fontSize: '36px',
    textAlign: 'center',
  },
  textField: {
    height: '100%',
  },
  postButton: {
    textAlign: 'right',
  },
});

class NewReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      review: '',
    };
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.main}>
        <div className={classes.rating}>
          <StarRatingComponent
              name="newRate"
              editing={true}
              onStarClick={this.onStarChange.bind(this)}
          />
        </div>
        <TextField
            className={classes.textField}
            placeholder="Write a Review"
            margin="normal"
            multiline
            fullWidth
            rows="23"
            onChange={this.onChangeReview.bind(this)}
          />
        <div className={classes.postButton}>
          <Button variant="outlined" onClick={this.onClick.bind(this)}>
            Post Reivew
          </Button>
        </div>
      </div>
    );
  }

  onStarChange(index) {
    this.setState({rating: index});
  }

  onChangeReview(e) {
    this.setState({review: e.target.value})
  }

  onClick(e) {
    console.log('post review');
    console.log('rating: ', this.state.rating);
    console.log('review: ', this.state.review);
  }
}

NewReview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewReview);