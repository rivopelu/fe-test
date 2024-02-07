import { createTheme } from '@mui/material';
import { StyleVariable } from '../constants/StyleVariable.ts';

export const themeConfig = createTheme({
  palette: {
    primary: {
      light: StyleVariable.colors.primary.light,
      main: StyleVariable.colors.primary.main,
      dark: StyleVariable.colors.primary.dark,
      contrastText: '#fff',
    },
  },
});
