import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Main from "./pages/Main";
import "./assets/styles/index.scss";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
