import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  imgFluid: {
    maxWidth: '100%',
    height: 'auto',
    filter: 'grayscale(90%)',
  },
  imgRounded: {
    borderRadius: '6px !important',
  },
  imgRoundedCircle: {
    borderRadius: '50% !important',
  },
  imgRaised: {
    boxShadow:
      '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
});

const StackLogo = ({ imgStyle = {}, imgUrl }: any) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} sx={{ p: 1 }}>
      <Typography align="center">
        <img
          alt="..."
          src={imgUrl}
          className={classes.imgRounded + ' ' + classes.imgFluid}
          style={imgStyle}
        />
      </Typography>
    </Paper>
  );
};

export default StackLogo;
