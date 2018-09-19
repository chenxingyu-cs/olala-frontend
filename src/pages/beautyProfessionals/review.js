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
    const bpId = this.props.current._id;
    return (
        <NewReview bpId={bpId} userId={this.props.userId} userName={this.props.userName} dispatch={this.props.dispatch} />
    )
  }

}

AddReviewPage.propTypes = {
};

function mapStateToProps(state) {
  const { current } = state.beautyProfessionals;
  const { userId, userName } = state.app;
  return {
    current,
    userId,
    userName
  };
}

export default connect(mapStateToProps)(AddReviewPage);
