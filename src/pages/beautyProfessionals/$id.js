import React from 'react';
import { connect } from 'dva';
import Typography from '@material-ui/core/Typography';
import ButtonDiv from '../../components/ButtonDiv';
import ImageGridList from '../../components/ImageGridList';
import BeautyProfessionalReviews from '../../components/BeautyProfessionalReviews';
import RateWithNum from '../../components/RateWithNum';
import Grid from '@material-ui/core/Grid';


const style = {
  card: {
    display: 'flex',
    padding: '8px',
    margin: '8px 8px 0 8px',
  },
  normal: {
    padding: '8px',
  },
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

    const maybePhotos = bpData.photos || [];
    const tileData = maybePhotos.map((photo, index) => (
      {
        img: photo,
        title: 'Image',
        author: 'author',
        cols: index === 0 ? 2 : 1,
      }
    ));
    const currentTime = new Date();
    const currentDayOfWeek = currentTime.getDay();
    const currentTimeStr = `${currentTime.getHours}:${currentTime.getMinutes}`
    const isBpOpening = bpData.availability.filter(item => item.dayOfWeek === currentDayOfWeek && item.startTimeOfDay < currentTimeStr && item.endTimeOfDay > currentTimeStr).length > 0
    const bpStatus = isBpOpening ? 'Opening' : 'Closed';
    let openAndCloseTime = null;
    const tmpToday = bpData.availability.filter(item => item.dayOfWeek === currentDayOfWeek);
    if (tmpToday.length > 0) {
      openAndCloseTime = ` • ${tmpToday[0].startTimeOfDay} - ${tmpToday[0].endTimeOfDay}`;
    }

    return (
      <div style={style.normal}>
        <Typography variant="title">
          {bpData.name}
        </Typography>

        <RateWithNum rate={bpData.reviewsOverall.rate} number={bpData.reviewsOverall.number} />

        <Typography variant="body1">
          {bpData.services.join(', ')}
        </Typography>


        <Grid
          container
          alignItems="center"
          direction="row"
          justify="flex-start">
          <Grid item>
            <Typography variant="body2">
              {bpStatus}&nbsp;
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              {openAndCloseTime}
            </Typography>
          </Grid>
        </Grid>

        <ButtonDiv />

        <ImageGridList tileData={tileData} />

        <BeautyProfessionalReviews reviews={bpData.reviews} />
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
