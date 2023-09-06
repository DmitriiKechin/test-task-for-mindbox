import { createTheme } from '@mui/material';

export const getTheme = (isDarkMode: boolean) => {
  return createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: (themeParam) => `
				body {
					background-color: ${
            isDarkMode
              ? themeParam.palette.primary.dark
              : themeParam.palette.primary.light
          };
				}
			`,
      },
    },
  });
};
