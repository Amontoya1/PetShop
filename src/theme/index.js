import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import _ from 'lodash';
import typography from './typography';

const baseConfig = {
  typography,
};


const themes = [
  {
    darkMode: false,
    palette: {
        type: 'light',
        primary: {
          dark: colors.indigo.A700,
          main: colors.indigo.A400,
          light: colors.indigo.A200,
        },
        secondary: {
          dark: colors.purple.A700,
          main: colors.purple.A700,
          light: colors.purple.A200,
        },
        text: {
          primary: colors.blueGrey[900],
          secondary: colors.blueGrey[600],
        },
      },
    },
    {
      darkMode: true,
      palette: {
        type: 'dark',
        primary: {
          dark: colors.deepPurple.A700,
          main: colors.deepPurple.A400,
          light: colors.deepPurple.A200,
        },
        secondary: {
          dark: colors.blueGrey.A700,
          main: colors.blueGrey.A400,
          light: colors.blueGrey.A200,
        },
        background: {
          default: '#282C34',
          dark: '#1c2025',
          paper: '#282C34',
        },
        text: {
          primary: '#e6e5e8',
          secondary: '#757575',
        },
      },
    },
  ];
  
  export default function createTheme(settings = {}) {
    const themeConfig = themes.find(
      (theme) => theme.darkMode === settings.darkMode,
    );
  
    const theme = createMuiTheme(_.merge({}, baseConfig, themeConfig));
  
    return theme;
  }