import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import App from "./App";
import Container from "./Container";

ReactDOM.render(
  <ThemeProvider
    theme={createMuiTheme({
      palette: { primary: { main: "rgb(66, 96, 143)" } },
    })}
  >
    <CssBaseline />
    <SnackbarProvider>
      <Container>
        <App />
      </Container>
    </SnackbarProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
