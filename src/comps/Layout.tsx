import React, { FC, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Header from './Header';
import Footer from './Footer';
import CookieBanner from './miscs/CookieBanner';

import { defaultTheme } from '../theme';

interface LayoutInterface {
  children: any;
  theme?: any;
}

const Layout: FC<LayoutInterface> = ({ children, theme }: LayoutInterface) => {
  useEffect(() => {
    if (typeof process == 'object' && process.env) {
      if (process.env.NODE_ENV == 'development') {
        console.log('env.URL_API:', process.env.URL_API);
        console.log('mui.defaultTheme:', defaultTheme);
      }
    }
  }, [])

  return (
    <React.Fragment>
      <ThemeProvider theme={theme || defaultTheme}>
        <CssBaseline />
        <Container disableGutters maxWidth={false}>
          <Header />
          {children}
          <Footer />
        </Container>
      </ThemeProvider>
      <CookieBanner />
    </React.Fragment>
  );
};

export default Layout;
