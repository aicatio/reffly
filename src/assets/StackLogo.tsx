import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const StackLogo = ({ imgStyle = {}, imgUrl }: any) => {
  const useStyles = makeStyles({
    imgFluid: {
      maxWidth: '100%',
      height: 'auto',
      filter: 'grayscale(90%)',
    },
    imgRounded: {
      borderRadius: '6px !important',
    },
  });

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
