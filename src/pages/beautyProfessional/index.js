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

  render() {
    return (
      <div>
      <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        onClear={() => console.log('onClear')}
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

export default connect()(BeautyProfessionalsIndexPage);
