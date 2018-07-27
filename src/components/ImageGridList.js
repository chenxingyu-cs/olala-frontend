import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    marginTop: 20,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 250,
  },
  subheader: {
    width: '100%',
  },
});

function ImageGridList(props) {
  const { classes, tileData = [] } = props;

  return (
    <div className={classes.card}>
    <Typography variant="subheading" gutterBottom>
        Photos
      </Typography>
    <div className={classes.root}>
      <GridList cellHeight={120} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </div>
  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);