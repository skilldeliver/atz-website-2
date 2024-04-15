import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2551EE",
    },
    secondary: { main: "#000000" },
    background: {
      default: "#EFF3FF",
    },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: { root: { backgroundColor: "transparent" } },
    },
    MuiButton: { defaultProps: { disableElevation: true } },
  },
});

export default responsiveFontSizes(theme);
