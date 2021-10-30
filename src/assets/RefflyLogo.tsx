import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
const logo = require('../static/images/logos/Full_Logo.svg');

export default function RefflyLogo() {
  return (
    <Grid item xs={12}>
      <Grid container mt={5} justifyContent="center">
        <img
          src={logo}
          alt="Reffly Logo"
          style={{ width: '20%', minWidth: '200px' }}
        />
      </Grid>
      <Grid container sx={{ mb: 6, mt: 1 }} justifyContent="center">
        <Typography>Free, Open source, Community driven!</Typography>
      </Grid>
    </Grid>
  );
}
