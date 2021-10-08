import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Stack, Link } from '@mui/material';
import StackLogo from '../assets/StackLogo';

const TechnologyStack = () => {
  return (
    <Grid my={3} container justifyContent="center">
      <Grid item xs={12}>
        <Stack spacing={2}>
          <Typography fontWeight="normal" align="center" variant="h4">
            Play with{' '}
            <i>
              <b>reffly </b>
            </i>{' '}
            using freemium technologies,{' '}
            <Link underline="none" href="#">
              learn more ...
            </Link>
          </Typography>

          <Grid justifyContent="center" container spacing={2}>
            <Grid item xs={8} sm={4}>
              <StackLogo
                imgStyle={{ marginTop: '10px', marginBottom: '10px' }}
                imgUrl="/images/logos/nodejs-v2.svg"
              />
            </Grid>
            <Grid item xs={8} sm={4}>
              <StackLogo
                imgStyle={{ marginTop: '8px', marginBottom: '8px' }}
                imgUrl="/images/logos/mongodb-v1.svg"
              />
            </Grid>
            <Grid item xs={8} sm={4}>
              <StackLogo
                imgStyle={{ marginTop: '18px', marginBottom: '18px' }}
                imgUrl="/images/logos/nginx-v1.svg"
              />
            </Grid>
            <Grid item xs={8} sm={4}>
              <StackLogo
                imgStyle={{ marginTop: '-80px', marginBottom: '-90px' }}
                imgUrl="/images/logos/heroku-v1.svg"
              />
            </Grid>
          </Grid>

          <Typography mb={3} fontWeight="normal" align="center">
            Need help? hire me on{' '}
            <Link
              target="_blank"
              rel="noopener"
              underline="none"
              href="https://freelancer.com/u/alihasanbd/"
            >
              Freelancer.com
            </Link>
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default TechnologyStack;
