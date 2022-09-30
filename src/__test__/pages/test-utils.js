import { render } from "@testing-library/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "theme";
import HomeContextProvider from "context/home.context";

function AppProviders({ children }) {
  return (
    <HomeContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </HomeContextProvider>
  );
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AppProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
