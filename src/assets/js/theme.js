import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#B2EBF2',
      main: '#00BCD4',
      dark: '#0097A7',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FF5722',
      contrastText: '#fff',
    },
  },
});

export default theme;
