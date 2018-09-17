import React from 'react';
import { connect } from 'dva';
import NewReview from '../../components/NewReview';


class AddReviewPage extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {}

  render() {
    return (
        <NewReview />
    )
  }

}

AddReviewPage.propTypes = {
};

function mapStateToProps(state) {
  const { current } = state.beautyProfessionals;
  return {
    current,
  };
}

export default connect(mapStateToProps)(AddReviewPage);
