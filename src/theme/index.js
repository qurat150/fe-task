import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#7E33FF',
    },
    secondary: {
      main: '#fff',
    },
  },

  typography: {
    fontFamily: `"Syne", sans-serif`,
    allVariants: {
      color: 'white',
    },
  },
});
