import React, { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Header from './Header';
import Footer from './Footer';
import CookieBanner from './miscs/CookieBanner';

import { theme } from '../theme';

console.log('current theme:', theme);

interface LayoutInterface {
  children: any;
}

const Layout: FC<LayoutInterface> = ({ children }: LayoutInterface) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container disableGutters maxWidth={false}>
          <Header />
          {children}
        </Container>
      </ThemeProvider>
      <Footer theme={theme} />
      <CookieBanner />
    </React.Fragment>
  );
}

export default Layout;
