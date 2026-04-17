'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#D4AF37', // Gold
      light: '#E6C866',
      dark: '#B8941F',
    },
    secondary: {
      main: '#8B0000', // Deep Red/Maroon
      light: '#A52A2A',
      dark: '#5C0000',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C2C2C',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: 'Lora Italic, Georgia, serif, Inter, Arial, sans-serif',
    button: {
      fontFamily: 'Lora Italic, Georgia, serif',
    },
    h1: {
      fontFamily: 'Playfair Italic, Georgia, serif',
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#2C2C2C',
    },
    h2: {
      fontFamily: 'Playfair Italic, Georgia, serif',
      fontSize: '2rem',
      fontWeight: 600,
      color: '#2C2C2C',
    },
    h3: {
      fontFamily: 'Playfair Italic, Georgia, serif',
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#2C2C2C',
    },
    h4: {
      fontFamily: 'Playfair Italic, Georgia, serif',
    },
    h5: {
      fontFamily: 'Playfair Italic, Georgia, serif',
    },
    h6: {
      fontFamily: 'Playfair Italic, Georgia, serif',
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.75,
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.75,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
        },
        contained: {
          boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 16px rgba(212, 175, 55, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
  },
});
