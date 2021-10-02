import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { Link } from 'react-router-dom';
import Input from '@mui/material/Input';
import AddLinkIcon from '@mui/icons-material/AddLink';

import { useFormik } from 'formik';
import { object, string } from 'yup';
import axios from 'axios';

const validationSchema = object().shape({
  origUrl: string()
    .required("Original Url is required")
    .url("Please enter a valid Url"),
});

export default function Jumptron() {
  const [shortUrl, setShortUrl] = useState('http://localhost:3101/JRG5ai');
  const formik = useFormik({
    initialValues: { origUrl: 'https://www.youtube.com/' },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {

      axios.post('http://localhost:3101/api/add', values)
        .then((response) => {
          if (response.status == 200) {
            if (response.data.status == 'success') {
              setShortUrl(response.data.shortUrl)
            }
            if (response.data.status == 'failed') {
              actions.setErrors({ origUrl: response.data.message });
            }
          }
          console.log(actions, response);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          actions.setSubmitting(false);
        });
    },
  });

  return (
    <Grid item xs={8}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
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
                  error={formik.touched.origUrl && Boolean(formik.errors.origUrl)}
                  helperText={formik.touched.origUrl && formik.errors.origUrl}
                  placeholder="Enter your long Url here"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3}>
                <LoadingButton
                  loading={formik.isSubmitting}
                  disabled={formik.isSubmitting}
                  loadingPosition="start"
                  startIcon={<AddLinkIcon />}
                  sx={{ p: 1.7 }}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  {formik.isSubmitting ? 'Processing...' : 'SHORTEN'}
                </LoadingButton>
              </Grid>
            </Grid>
          </form>
          <Typography mt={2} variant="body1" color="text.secondary">
            By using our service, you accept our{' '}
            <Link to="/terms-and-conditions">Terms</Link> &amp;{' '}
            <Link to="/privacy-policy">Privacy</Link>
          </Typography>
        </CardContent>
        {shortUrl && (
          <CardActions sx={{ bgcolor: 'lightgray' }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography>Reff.ly+ for self-branding &amp; more</Typography>
              </Grid>
              <Grid item mt={1} xs={5}>
                <Input
                  readOnly
                  value={shortUrl}
                  disableUnderline
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={1} sx={{ pr: 1, mt: 0.5 }}>
                <Button sx={{ float: 'right' }} variant="outlined" size="small">
                  COPY
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        )}
      </Card>
    </Grid>
  );
}
