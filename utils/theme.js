import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '1.6rem',
      margin: '1rem 0',
      fontWeight: 'bolder',
    },
    h2: {
      fontSize: '1.4rem',
      margin: '1rem 0',
      fontWeight: 'bolder',
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#f0c000',
    },
    secondary: {
      main: '#208080',
    },
  },
});
