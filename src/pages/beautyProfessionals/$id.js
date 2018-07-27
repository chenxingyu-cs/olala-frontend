import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import Typography from '@material-ui/core/Typography';
import SearchBar from 'material-ui-search-bar';
import StarRatingComponent from 'react-star-rating-component';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonDiv from '../../components/ButtonDiv';
import ImageGridList from '../../components/ImageGridList';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';



const style = {
  card: {
    display: 'flex',
    padding: '8px',
    margin: '8px 8px 0 8px',
  },
  normal: {
    padding: '8px',
  },
  rateContent: {
    display: 'flex',
    paddingBottom: 4,
  },
  rateNum: {
    padding: '0 0 0 4px',
  },
  reviewCard: {
    margin: '8px 0 0 0',
    padding: '8px 0 8px 0',
  },
  orangeAvatar: {
    color: '#fff',
    backgroundColor: deepOrange[500],
    width: 20,
    height: 20,
  },
  reviewerName: {
    // height: 20,
    // lineHeight: 2,
  },
  avator: {
    marginBottom: 4,
  }
};

function Services(props) {
  const { services } = props;
  const allServices = services.join(', ')
  return <div>{allServices}</div>;
};

class BeautyProfessionalDetailPage extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'beautyProfessionals/fetchCurrent',
      payload: {
        bpId: this.props.match.params.id,
      },
    });
  }

  render() {
    const bpData = this.props.current;
    console.log('bpData: ', bpData)
    // debugger;

    // const maybePhotos = bpData.photos || [];
    const tileData = bpData.photos.map((photo, index) => (
      {
        img: photo,
        title: 'Image',
        author: 'author',
        cols: index === 0 ? 2 : 1,
      }
    ));

    // const maybeReviews = bpData.reviews || [];
    const reviewDiv = bpData.reviews.map(review => {
      const createAtTime = review.createdAt && new Date(review.createdAt).toLocaleDateString();

      return (
      <Card style={style.reviewCard} key={review._id}>
        <CardContent style={style.content}>
        <Row type="flex" justify="space-around" align="middle" style={style.avator}>
            <Col span={2}>
            <Avatar style={style.orangeAvatar}>{review.reviewerName[0]}</Avatar>
          </Col>
            <Col span={22}>
            <div style={style.reviewerName}>{review.reviewerName}</div>
            </Col>
          </Row>
         
          
          <div style={style.rateContent}>
            <StarRatingComponent
              name="overallRate"
              editing={false}
              value={review.score}
            />
            <span style={style.rateNum}>{createAtTime}</span>
          </div>
          <div>{review.content}</div>
        </CardContent>

      </Card>
    );
  });

    return (
      <div style={style.normal}>
        <Typography variant="title" gutterBottom>
          {bpData.name}
        </Typography>
        <div style={style.rateContent}>
          <StarRatingComponent
            name="overallRate"
            editing={false}
            value={bpData.reviewsOverall.rate}
          />
          <span style={style.rateNum}>{bpData.reviewsOverall.number} reviews</span>
        </div>
        <Typography variant="subheading" gutterBottom>
          {bpData.services.join(', ')}
        </Typography>
        <Typography variant="subheading" gutterBottom>
          {bpData.availability[0].startTimeOfDay} - {bpData.availability[0].endTimeOfDay}
        </Typography>
        <ButtonDiv />
        <ImageGridList tileData={tileData} />
        Reviews
        {reviewDiv}
      </div>
    );
  }

}

BeautyProfessionalDetailPage.propTypes = {
};

function mapStateToProps(state) {
  const { current } = state.beautyProfessionals;
  return {
    current,
  };
}

export default connect(mapStateToProps)(BeautyProfessionalDetailPage);
