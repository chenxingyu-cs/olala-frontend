
import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Button } from 'antd';
import styles from './index.css';

const theme = createMuiTheme({
    overrides: {
      // Name of the component ⚛️ / style shee
      MuiButton: {
        // Name of the rule
        root: {
          // Some CSS
          background: 'linear-gradient(45deg, #C12C7E 30%, #832F8A 90%)',
          borderRadius: 20,
          border: 0,
          width: 200,
          color: 'white',
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
        },
      },
    },
  });

function Layout({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
        {children}
    </MuiThemeProvider>
  );
}

export default Layout;