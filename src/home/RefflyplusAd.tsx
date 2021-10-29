import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Card, CardMedia, Link } from '@mui/material';

import RefflyPlusLogo from '../assets/RefflyPlusLogo';

const RefflyplusAd = () => {
  return (
    <Grid container spacing={5} my={10}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center">
          FOR ENTERPRISE
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card sx={{ width: '100%' }}>
          <CardMedia
            component="img"
            height="auto"
            image="/images/others/nicechartjs-v1.png"
            alt="Tracking Graph"
            sx={{ opacity: 0.2, filter: 'grayscale(70%)' }}
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid
          mt={10}
          container
          justifyContent="right"
        >
          <Typography
            fontWeight="normal"
            align="center"
            variant="h4"
          >
            Self host{' '}
            <i>
              <b>reffly</b>
            </i>{' '}
            for full features including Link tracking Statistics, Branding &amp;
            more... <br />
            <i>
              or Try <b>reffly plus</b>
            </i>
          </Typography>
          <Grid xs={12}>
            <Link underline="none" href="https://reffly.aicat.io/">
              <RefflyPlusLogo />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RefflyplusAd;
