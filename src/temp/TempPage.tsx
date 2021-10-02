import React, { FC } from 'react';
import Grid from '@mui/material/Grid';

import Jumptron from './Jumptron'

const TempPage: FC = () => {
  return (
    <Grid container my={10} justifyContent="center">
      <Jumptron />
    </Grid>);
};

export default TempPage