import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./components/App";
import { GlobalStyle } from "./GlobalStyle";
import "modern-normalize/modern-normalize.css";

const theme = {
  colors: {
    primary: "bisque",
    notSale: "yellow",
    price: "green",
  },

  fonts: {
    primary: "Roboto, sans-serif",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
    </ThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
