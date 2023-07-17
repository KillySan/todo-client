import { createTheme } from '@mui/material/styles';
import { Color } from './colors';

export const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial',
    h1: { fontSize: 30 },
    h2: { fontSize: 26 },
    h3: { fontSize: 24 },
    h4: { fontSize: 20 },
    body1: { fontSize: 16 },
    body2: { fontSize: 14 },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
        size: 'small',
      },
      styleOverrides: {
        root: () => ({
          '& .MuiInputBase-input': {
            borderRadius: 6,
            border: '1px solid',
            fontSize: '14px',
            padding: '6px 12px',

            '&:focus': {
              borderColor: Color.BLACK,
            },
          },

          backgroundColor: Color.WHITE,
        }),
      },
    },

    MuiButton: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: false,
        size: 'small',
        disableRipple: true,
      },
      styleOverrides: {
        root: () => ({
          borderRadius: 6,
          border: '1px solid',
          fontSize: '14px',
          backgroundColor: Color.BLUE,
          color: Color.BLACK,
          textTransform: 'none',

          '&:hover': {
            backgroundColor: Color.BLUE,
          },
        }),
      },
    },
  },
});
