'use client';

import { createTheme, responsiveFontSizes } from '@mui/material';

const lightTheme = createTheme({
  transitions: {
    duration: {
      enteringScreen: 500
    }
  }
});

const theme = lightTheme;

export default responsiveFontSizes(theme);
