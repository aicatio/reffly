import React, { useState } from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import { makeStyles } from '@mui/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const useStyles = makeStyles((theme: any) => ({
  boxBackground: {
    backgroundColor: `${theme.palette.primary.main}15`,
    backgroundSize: '5px 5px',
    backgroundImage: `repeating-linear-gradient(45deg, ${theme.palette.common.white} 0, ${theme.palette.common.white} 1px, ${theme.palette.primary.main}15 0, ${theme.palette.primary.main}15 50%)`,
  },
}));

export default function ShortenerResult({ shortUrl }: any) {
  const [copied, setCopied] = useState(false);
  const classes = useStyles();

  return (
    <CardActions className={classes.boxBackground}>
      <Grid container spacing={2}>
        <Grid mt={1} lg={5} md={5} item>
          <Typography ml={1}>
            To enjoy all features, use self hosted!
          </Typography>
        </Grid>
        <Grid item mt={1} lg={5} md={6} xs={11} >
          <Input
            readOnly
            value={shortUrl}
            disableUnderline
            size="small"
            fullWidth
            inputProps={{ style: { fontSize: "0.95rem", textAlign: "right" } }}
          />
        </Grid>
        <Grid item lg={2} md={1} xs={1} sx={{ pr: 1, mt: 0.5 }}>
          <CopyToClipboard
            text={shortUrl}
            onCopy={() => {
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 5000);
            }}
          >
            <Button
              sx={{ float: 'right', textTransform: 'none' }}
              color="primary"
              variant="contained"
              size="small"
            >
              {copied ? 'Copied!' : 'COPY'}
            </Button>
          </CopyToClipboard>
        </Grid>
      </Grid>
    </CardActions>
  );
}
