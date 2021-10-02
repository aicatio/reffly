import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import GitHub from '@mui/icons-material/GitHub';
import { Box, Link, Container } from '@mui/material';

import RefflyLogo from '../assets/RefflyLogo';
import RefflyPlus from '../assets/RefflyPlusIcon';

export default function Header() {
  return (
    <Container>
      <Box>
        <AppBar sx={{ boxShadow: 0 }} color="transparent" position="relative">
          <Toolbar sx={{ justifyContent: 'right', p: 5 }}>
            <Link href="https://reffly.aicat.io/">
              <RefflyPlus />
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link
              target="_blank"
              rel="noopener"
              href="https://github.com/aicatio/reffly/"
            >
              <Avatar sx={{ bgcolor: 'grey.800' }} variant="rounded">
                <GitHub />
              </Avatar>
            </Link>
          </Toolbar>
        </AppBar>
        <RefflyLogo />
      </Box>
    </Container>
  );
}
