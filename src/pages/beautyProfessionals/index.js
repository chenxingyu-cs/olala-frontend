import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import SearchBar from 'material-ui-search-bar';
import StarRatingComponent from 'react-star-rating-component';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from 'umi/link';
import router from 'umi/router';

const style = {
  card: {
    display: 'flex',
    padding: '8px',
    margin: '8px 8px 0 8px',
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
    width: '80px',
    height: '80px',
  },
  rateContent: {
    display: 'flex',
  },
  rateNum: {
    padding: '0 0 0 4px',
  },
  searchBar: {
    margin: '4px 4px 0 4px',
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
      // <Link to={`/beautyProfessionals/${bp._id}`}>
      <Card style={style.card} key={bp._id} onClick={() => router.push(`/beautyProfessionals/${bp._id}`)}>
        <CardMedia
          style={style.image}
          image={bp.photos[0]}
        />
        <CardContent style={style.content}>
          <div>{bp.name}</div>
          <div style={style.rateContent}>
            <StarRatingComponent
              name="overallRate"
              editing={false}
              value={bp.reviewsOverall.rate}
            />
            <span style={style.rateNum}>{bp.reviewsOverall.number} reviews</span>
          </div>
          <Services services={bp.services} />
          <Row>
            <Col span={12}>
          <div>
            {bp.address.streetAddress}
          </div>
          </Col>
            <Col span={2} offset={10}>
            <div>
            ${bp.pricing[0].price}
          </div>
            </Col>
          </Row>
        </CardContent>

      </Card>
      // </Link>
    )
    return (
      <div>
        <Row gutter={24}>
          <Col lg={24} md={24}>
            <SearchBar
              style={style.searchBar}
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
