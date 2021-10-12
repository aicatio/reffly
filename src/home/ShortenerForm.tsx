import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import AddLinkIcon from '@mui/icons-material/AddLink';
import { Link } from '@mui/material';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { setCookieAccepted } from '../redux/actions/cookie';
import { ShortenedState } from '../redux/reducers/shortened';
import { createShortenedUrl } from '../redux/actions/shortened';
import ShortenerResult from './helpers/ShortenerResult';

const validationSchema = object().shape({
  origUrl: string()
    .required('Original Url is required')
    .url('Please enter a valid Url'),
});

type StateType = {
  shortened: ShortenedState;
};

export default function ShortenerForm() {
  const dispatch = useDispatch();
  const { shortUrl, origUrl } = useSelector(
    (state: StateType) => state.shortened
  );

  const formik = useFormik({
    initialValues: { origUrl: origUrl || '' },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(setCookieAccepted());
      dispatch(
        createShortenedUrl(values.origUrl, (status, message) => {
          actions.setSubmitting(false);
          if (status == false) {
            actions.setErrors({ origUrl: message });
            return;
          }
        })
      );
    },
  });

  const submitBtnProps: any = {
    loading: formik.isSubmitting,
    disabled: formik.isSubmitting,
    sx: { p: 1.7, bgcolor: 'secondary.dark' },
    size: 'large',
    type: 'submit',
    variant: 'contained',
  };

  if (formik.isSubmitting) {
    submitBtnProps.startIcon = <AddLinkIcon />;
    submitBtnProps.loadingPosition = 'start';
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={9}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent sx={{ p: 4, pb: 2 }}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={9}>
                  <TextField
                    fullWidth
                    name="origUrl"
                    disabled={formik.isSubmitting}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.origUrl}
                    error={
                      formik.touched.origUrl && Boolean(formik.errors.origUrl)
                    }
                    helperText={formik.touched.origUrl && formik.errors.origUrl}
                    placeholder="Enter your long Url here"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <LoadingButton color="primary" fullWidth {...submitBtnProps}>
                    {formik.isSubmitting ? 'Processing...' : 'SHORTEN'}
                  </LoadingButton>
                </Grid>
              </Grid>
            </form>
            <Typography mt={2} variant="body1" color="text.secondary">
              By using our service, you accept our{' '}
              <Link href="/terms-and-conditions">Terms</Link> &amp;{' '}
              <Link href="/privacy-policy">Privacy</Link>
            </Typography>
          </CardContent>
          {shortUrl && origUrl && <ShortenerResult shortUrl={shortUrl} />}
        </Card>
      </Grid>
    </Grid>
  );
}
