import React, { FC, Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import ShortenerForm from './ShortenerForm';
import SponsorshipAd from './SponsorshipAd';
import RefflyplusAd from './RefflyplusAd';
import TechnologyStack from './TechnologyStack';
import AicatpromoAd from './AicatpromoAd';

//importing css styles file
// import './styles.css';

const Homepage: FC = () => {
  const useStyles = makeStyles((theme: any) => ({
    boxBackground: {
      backgroundColor: `${theme.palette.primary.main}15`,
    },
    boxBottomLeft: {
      backgroundColor: theme.palette.background.default,
      borderTopRightRadius: 200,
      height: 50,
    },
    boxBottomRight: {
      backgroundColor: theme.palette.background.default,
      borderTopLeftRadius: 200,
      height: 50,
    },
  }));

  const classes = useStyles();

  return (
    <Fragment>
      <Container>
        <ShortenerForm />
        <SponsorshipAd />
      </Container>
      <Grid className={classes.boxBackground} item xs={12}>
        <Container>
          <RefflyplusAd />
          <TechnologyStack />
        </Container>
        <Grid container>
          <Grid item xs={6} className={classes.boxBottomLeft}></Grid>
          <Grid item xs={6} className={classes.boxBottomRight}></Grid>
        </Grid>
      </Grid>
      <Container>
        <AicatpromoAd />
      </Container>
    </Fragment>
  );
};

export default Homepage;
