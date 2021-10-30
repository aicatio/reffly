import * as React from 'react';
import Grid from '@mui/material/Grid';
const logoPlus = require('../static/images/logos/Plus_Full_Logo.svg');

export default function RefflyLogo() {
  return (
    <Grid item xs={12} className="Logo">
      <Grid container mt={5} justifyContent="center">
        <img
          src={logoPlus}
          alt="Reffly Plus Logo"
          style={{ width: '20%', minWidth: '200px' }}
        />
      </Grid>
    </Grid>
  );
}
