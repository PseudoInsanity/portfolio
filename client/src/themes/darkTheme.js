import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#242325', // Raisin Black
      light: '#f0fdff', 
    },
    secondary: {
      main: '#32615c', // Dark Green
      light: '#bad29f', //Yellog
    },
    background: {
      default: '#f4fcfb',
    },
    error: {
      main: '#DC3545', // material error
    },
    warning: {
      main: '#4F565F', // material warning
    },
    success: {
      main: '#28A745', // material success
    },
  },
  typography: {
    fontSize: 14,

    // FONTS
    fontFamily: [
      'Montserrat',
      'Gotham Pro',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),

    //BODY
    body1: {
      fontFamily: 'Gotham Pro',
      fontSize: 35
    },
    body2: {
      fontFamily: 'Gotham Pro',
      fontSize: 16
    },
    // HEADERS
    h1: {
      fontFamily: 'Gotham Pro',
    },
    h2: {
      fontFamily: 'Gotham Pro',
    },
    h3: {
      fontFamily: 'Gotham Pro',
    },
    h4: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Montserrat',
      fontWeight: 800,
    },
    textFields: {
      fontWeight: '400',
      color: '#eee',
    },
  },
});

const darkTheme = responsiveFontSizes(theme);

export default darkTheme;
