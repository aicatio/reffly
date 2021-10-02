// @ts-expect-error
import Carbon from 'react-carbon';
import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const SponsorshipAd = () => {
  return (
    <Grid container spacing={2} mt={5}>
      <Grid item xs={6}>
        <Grid container justifyContent="right">
          <Paper style={{ fontSize: 12 }} elevation={0} sx={{ maxWidth: 335 }}>
            <Carbon
              name="carbon-home"
              placement="pixelmobco"
              serve="CK7I42Q7"
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Typography>Fund us on -</Typography>
        <img
          style={{ maxHeight: 40 }}
          alt="BuyMeACoffee"
          src="https://cdn.buymeacoffee.com/assets/img/home-page-v3/bmc-new-logo.png"
        />
      </Grid>
    </Grid>
  );
};

export default SponsorshipAd;
