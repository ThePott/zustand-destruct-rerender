import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // mode: 'light', // or 'dark'
    mode: 'dark', // or 'dark'
  },
  typography: {
    fontSize: 16,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h6',
          h4: 'h6',
          h5: 'h6',
          h6: 'h6',
          subtitle1: 'h6',
          subtitle2: 'h6',
          body1: 'body2',
          body2: 'body2',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "outlined"
      }
    }
  },
});



export default theme