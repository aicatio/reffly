import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


const SponsorshipAd = () => {
  return (
    <Grid container spacing={2} mt={5}>
      <Grid item xs={6}>
        <Grid container justifyContent="right">
          <Paper elevation={0} sx={{ maxWidth: 335 }}>
            <img
              style={{width:"100%", maxWidth:"300px" }}
              alt="Carbon Ad"
              src="/images/others/carbonad-v1.png"
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Typography>Fund us on -</Typography>
        <img
          style={{width:"100%", maxWidth:"300px" }}
          alt="BuyMeACoffee"
          src="https://cdn.buymeacoffee.com/assets/img/home-page-v3/bmc-new-logo.png"
        />
      </Grid>
    </Grid>
  );
};

export default SponsorshipAd;
