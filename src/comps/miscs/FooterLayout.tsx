import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function FooterLayout({ sticky, children }: any) {
  return (
    <Box sx={{ borderTop: '1px solid grey' }}>
      <AppBar color="transparent" position={sticky ? 'static' : 'relative'}>
        <Toolbar>{children}</Toolbar>
      </AppBar>
    </Box>
  );
}
