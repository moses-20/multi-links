import { createTheme, responsiveFontSizes } from "@mui/material";
import "@fontsource/mulish";

const theme = createTheme({
  typography: {
    fontFamily: "'Mulish', sans-serif",
  },
});

export default responsiveFontSizes(theme);
