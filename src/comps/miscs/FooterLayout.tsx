import React from 'react';
import { ThemeProvider } from '@mui/material//styles';
import { Container, CssBaseline } from '@mui/material/';
import { makeStyles } from '@mui/styles';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

export default function FooterLayout({ sticky, theme, children }: any) {
  // ToDo: add equal height blank space if sticky
  // const theme = useTheme();
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        disableGutters
        className={sticky ? classes.root : ''}
        maxWidth={false}
      >
        <Box sx={{ borderTop: '1px solid grey' }}>
          <AppBar color="transparent" position={sticky ? 'static' : 'relative'}>
            <Toolbar>{children}</Toolbar>
          </AppBar>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
