import { createTheme } from '@mui/material/styles';
import { orange, grey, blue, green} from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    [key: string]: any;
  }
  interface ThemeOptions {
    [key: string]: any;
  }
  interface PaletteOptions {
    [key: string]: any;
  }
}

export const refflyTheme = {
  palette: {
    primary: {
      main: blue[800],
    },
    secondary: {
      main: grey[800],
    },
    tertiary: {
      main: orange[500],
      dark: orange[900],
      light: orange[200],
    },
    refflyplus:{
      primary: green[500],
      secondary: grey[800],
      tertiary: green[900],
    },
    background: {
      default: '#ECEFF1',
      paper: grey[100],
    },
  },
  typography: {
    h6: { fontSize: '1.25rem' },
    h5: { fontSize: '1.50rem' },
    h4: { fontSize: '1.75rem' },
    h3: { fontSize: '2rem' },
    h2: { fontSize: '2.25rem' },
    h1: { fontSize: '2.50rem' },
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        textColor: '#ffffff',
        color: '#ffffff',
      },
      raisedSecondary: {
        textColor: '#ffffff',
        color: '#ffffff',
      },
    },
  },
};

export const defaultTheme = createTheme(refflyTheme);


