import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import FooterLayout from './miscs/FooterLayout';
import GitHub from '@mui/icons-material/GitHub';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Favorite from '@mui/icons-material/Favorite';

export default function Footer({ theme }: any) {
  return (
    <FooterLayout theme={theme} xs={12}>
      <Container sx={{ flexGrow: 1, width:"120%", marginLeft:"auto" }}>
        <Box sx={{ flexGrow: 1, width:"100%", margin:"0" }}>
          <AppBar
            sx={{ boxShadow: 0, p: 0 }}
            color="transparent"
            position="static"
          >
            <Toolbar >
              <Typography component="div" sx={{ flexGrow: 1, marginRight:"1%" }}>
                Made with <Favorite color="error" /> in <b>Bangladesh</b>
              </Typography>
              <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                Copyright &copy; {new Date().getFullYear()} Reff.ly
                &nbsp;|&nbsp;
                <Link underline="none" href="/terms-and-conditions">
                  Terms
                </Link>{' '}
                &nbsp;|&nbsp;
                <Link underline="none" href="/privacy-policy">
                  Privacy
                </Link>
              </Typography>
              <Link
                target="_blank"
                rel="noopener"
                href="https://github.com/aicatio/"
              >
                <GitHub color="secondary" fontSize="medium" />
              </Link>{' '}
              &nbsp;&nbsp;&nbsp;
              <Link
                target="_blank"
                rel="noopener"
                href="http://linkedin.com/company/reffly/"
              >
                <LinkedIn color="secondary" fontSize="medium" />
              </Link>{' '}
              &nbsp;&nbsp;&nbsp;
              <Link
                target="_blank"
                rel="noopener"
                href="https://fb.me/RefflyBD"
              >
                <Facebook color="secondary" fontSize="medium" />
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </FooterLayout>
  );
}
