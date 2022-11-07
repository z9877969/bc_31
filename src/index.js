import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { ThemeProvider } from "styled-components";
import "modern-normalize/modern-normalize.css";
import { GlobalStyle } from "./GlobalStyle";
import ModalProvider from "./context/ModalContext";
import BgColorProvider from "./context/BgColorContext";

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
      <ModalProvider>
        <BgColorProvider>
          <GlobalStyle />
          <App />
        </BgColorProvider>
      </ModalProvider>
    </ThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
