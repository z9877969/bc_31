import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import { store } from "./redux/store";
import "./index.scss";
import TodoProvider from "./context/TodoContext";
import ReactReduxProvider from "./context/ReactReduxContext";

console.log("store :>> ", store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <ReactReduxProvider store={store}>
        <TodoProvider>
          <App />
        </TodoProvider>
      </ReactReduxProvider>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
