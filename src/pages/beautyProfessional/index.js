import React from 'react';
import { connect } from 'dva';
import SearchBar from 'material-ui-search-bar'




class BeautyProfessionalsIndexPage extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      fullName: '',
      password: '',
    }
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'beautyProfessionals/fetch',
      payload: {
        page: 1,
      },
    });
  }

  render() {
    const firstBP = this.props.list[0];
    console.log('firstBP', firstBP)
    return (
      <div>
      <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={{
          margin: '0 auto',
          maxWidth: 800
        }}
      />
      </div>
    );
  }
  
}

BeautyProfessionalsIndexPage.propTypes = {
};

function mapStateToProps(state) {
  const { list } = state.beautyProfessionals;
  // console.log('listhaha', list)
  return {
    list,
  };
}

export default connect(mapStateToProps)(BeautyProfessionalsIndexPage);
