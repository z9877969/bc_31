import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import { store } from "./redux/store";
import "./index.scss";
import TodoProvider from "./context/TodoContext";

console.log("store :>> ", store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <TodoProvider>
        <App />
      </TodoProvider>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
