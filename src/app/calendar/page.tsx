'use client';

import Calendar from './_components/Calendar/Calendar';
import MainToolbar from './_components/MainToolbar/MainToolbar';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Augment the palette to include an green color
declare module '@mui/material/styles' {
  interface Palette {
    green: Palette['primary'];
  }

  interface PaletteOptions {
    green?: PaletteOptions['primary'];
  }
}

// Update the Button's color options to include an green option
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    green: true;
  }
}

const theme = createTheme({
  palette: {
    green: {
      main: '#bbed21',
      light: '#cff06a',
      dark: '#a8d522',
      contrastText: '#525c69',
    },
  },
});

export default function CalendarPage() {
  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ color: '#525c69', backgroundColor: '#bb616a', height: '100vh', minWidth: 1100, padding: '0 32px' }}>
        <MainToolbar />
        <Calendar />
      </Stack>
    </ThemeProvider>
  );
}
