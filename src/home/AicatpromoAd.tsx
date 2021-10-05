import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


const AicatpromoAd = () => {
  return (
    <Grid spacing={3} container pb={5}>
      <Grid item xs={6}>
        <Typography mt={5} fontWeight="normal" align="right" variant="h6">
          An open source contribution by
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <img src="/images/logos/aicat-v1.png" />
      </Grid>
    </Grid>
  );
};

export default AicatpromoAd;
