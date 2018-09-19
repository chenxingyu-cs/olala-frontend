import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FaceIcon from '@material-ui/icons/Face';
import router from 'umi/router';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
  },
};

const routeList = [
  '/beautyProfessionals',
  '/beautyProfessionals',
  '/users/me'
]

class SimpleBottomNavigation extends React.Component {
  constructor(props) {
    super(props);

    const pathList = this.props && this.props.location.pathname.split('/')
    const firstPath = pathList && pathList[1];
    const value = firstPath === 'users' ? 2 : 0;

    this.state = {
      value,
    }
  }

  componentDidUpdate(prevProps) {
    const pathList = this.props && this.props.location.pathname.split('/');
    if (prevProps.location.pathname !== pathList) {
      const firstPath = pathList && pathList[1];
      const value = firstPath === 'users' ? 2 : 0;
      if (value !== this.state.value) {
        this.setState({ value });
      }
    }
  }

  handleChange = (event, value) => {
    console.log(value)
    this.setState({ value });
    router.push(routeList[value])
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction disableRipple label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction disableRipple label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction disableRipple label="My Account" icon={<FaceIcon />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);