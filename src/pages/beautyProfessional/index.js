import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import SearchBar from 'material-ui-search-bar';
import StarRatingComponent from 'react-star-rating-component';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const style = {
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  image: {
    width: '100px',
    height: '100px',
  },
  contentNew: {
    padding: '0 0 0 12px',
  }
};

function Services(props) {
  const {services} = props;
  const allServices = services.join(', ')
  return <div>{allServices}</div>;
};

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
    const a = this.props.list.map(bp =>
      <Card style={style.card} key={bp._id}>
        <CardMedia
          style={style.image}
          image={bp.photos[0]}
        />
        <CardContent style={style.content} classes={{
        root: style.contentNew,
      }}>
          <div>{bp.name}</div>
          <div>
            <StarRatingComponent
              name="overallRate"
              editing={false}
              value={bp.reviewsOverall.rate}
            />
            <span>{bp.reviewsOverall.number} reviews</span>
          </div>
          <Services services={bp.services} />
          <div>
            {bp.address}
          </div>
        </CardContent>

      </Card>
    )
    return (
      <div>
        <Row gutter={24}>
          <Col lg={24} md={24}>
            <SearchBar
              onChange={() => console.log('onChange')}
              onRequestSearch={() => console.log('onRequestSearch')}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col lg={24} md={24}>
            {a}
          </Col>
        </Row>
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
