import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const AicatpromoAd = () => {
  return (
    <Grid spacing={3} container pb={5}>
      <Grid item xs={6}>
        <Typography
          mt={5}
          fontWeight="normal"
          align="right"
          variant="h6"
          alignItems="center"
          marginRight="10% !important"
          marginLeft="-5% !important"
          marginTop="0% !important"
          fontSize="1.1rem"
        >
          An open source contribution by
        </Typography>
      </Grid>
      <Grid item xs={6} marginTop="-5%">
        <img
          src="/images/logos/aicat-v1.png"
          width="70%"
        />
      </Grid>
    </Grid>
  );
};

export default AicatpromoAd;
