// @mui
import { createTheme } from '@mui/material/styles';
// common theme options
import commonThemeOptions from 'styles/theme/commonThemeOptions';

const { components: commonComponentsOptions } = commonThemeOptions;

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2F4550',
      light: '#FF826B',
      dark: '#B24531',
      contrastText: '#efecec',
    },
    secondary: {
      main: '#2196F3',
      light: '#4DABF5',
      dark: '#1769AA',
      contrastText: '#efecec',
    },
    info: {
      main: '#2F4550',
      light: '#2F4550',
      dark: '#B2B2B2',
      contrastText: '#F4F4F9',
    },
    background: {
      default: '#B8DBD9',
      paper: '#F4F4F9',
    },
    text: {
      primary: '#ffffff',
      secondary: '#2F4550',
      disabled: '#777777',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          color: '#383838',
        },
      },
    },
    ...commonComponentsOptions,
  },
});

export default lightTheme;
