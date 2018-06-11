import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function IndexPage() {
  const style = {
    signup: {
      width: '220px',
      height: '40px',
      top: '-20px',
    },
    facebook: {
      background: '#3B598D',
      width: '220px',
      height: '40px',
    },
  };

  return (
    <div className={styles.normal}>
      <Paper className={styles.signupPaper} elevation={2}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <TextField
              id="fullName"
              label="Full Name"
              className={styles.textField}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="Email"
              className={styles.textField}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              label="Password"
              className={styles.textField}
              type="password"
              margin="normal"
            />
          </Grid>
        </Grid>

      </Paper>
      <div>
        <Button style={style.signup}>Sign Up</Button>
      </div>
      <div>
        <Button style={style.facebook}>Sign Up With Facebook</Button>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
