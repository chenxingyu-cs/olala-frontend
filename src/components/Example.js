import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    // padding: 16,
    textAlign: 'center',
  }
});

function Example(props) {
  return (
    <div>
      <Grid container spacing={40}>
        <Grid item xs={12}>
          <Button variant="text">Sign Up</Button>
        </Grid>
        <Grid item xs={12}>
          <Button>
            Sign In
         </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Example);