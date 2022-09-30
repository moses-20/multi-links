import { CssBaseline, ThemeProvider } from "@mui/material";
import HomeContextProvider from "./context/home.context";
import Page from "./pages";
import theme from "./theme";

function App() {
  return (
    <HomeContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Page />
      </ThemeProvider>
    </HomeContextProvider>
  );
}

export default App;
