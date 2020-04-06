import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#242325', // Raisin Black
      light: '#f0fdff', 
    },
    secondary: {
      main: '#32615c', 
      light: '#e5e059', 
    },
    paper: {
      primary: '#6290c3', //Silver Lake Blue
      secondary: '#96ddd6', // Medium aquamarine
      penis: '#d8f9ff' ,//Light Cyan
      accent: '#073b3a' , //Rich Black
    },
    background: {
      default: '#f0fdff',
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
      fontSize: 25
    },
    body2: {
      fontFamily: 'Gotham Pro',
      fontSize: 16
    },
    body3: {
      fontFamily: 'Gotham Pro',
      fontSize: 35
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
    h6: {
      fontFamily: 'Gotham Pro',
      fontWeight: 650,
      fontSize: 25
    },
    textFields: {
      fontWeight: '400',
      color: '#eee',
    },
  },
});

const darkTheme = responsiveFontSizes(theme);

export default darkTheme;
