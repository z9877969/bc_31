import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import App from "./components/App";
import { GlobalStyle } from "./GlobalStyle";
import { store } from "./redux/store";
import "modern-normalize/modern-normalize.css";

console.log("store :>> ", store);

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
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
