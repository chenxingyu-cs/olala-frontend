
import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import indigo from '@material-ui/core/colors/indigo';
import BottomNavigation from '../components/BottomNavigation';

const theme = createMuiTheme({

    palette: {
      primary: { main: purple[400] },
      secondary: indigo,
    },
    overrides: {
      // Name of the component ⚛️ / style shee
      
      MuiButton: {
        // Name of the rule
        // root: {
        //   // Some CSS
        //   background: 'linear-gradient(45deg, #C12C7E 30%, #832F8A 90%)',
        //   borderRadius: 20,
        //   border: 0,
        //   color: 'white',
        //   padding: '0 30px',
        //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
        // },
        label: {
          textTransform: 'capitalize',
        },
      },
      MuiPaper: {
        rounded: {
          borderRadius: 4,
        }
      },
      MuiCardContent: {
        root: {
          paddingTop: 0,
          paddingLeft: '12px',
          paddingRight: 0,
          paddingBottom: 0,
          fontSize: '12px',
          '&:last-child': {paddingBottom: 0}
   
        },
      },
    },
  });

function Layout(props) {
  const { children, location } = props;
  return (
    <MuiThemeProvider theme={theme}>
        {children}
        <BottomNavigation location={location} />
    </MuiThemeProvider>
  );
}

export default Layout;