import React from "react";
import ReactDOM from "react-dom";
import {
  transitions,
  positions,
  types,
  Provider as AlertProvider,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "./history";
import store from "./store";
import App from "./App";

const options = {
  offset: "60px",
  position: positions.TOP_CENTER,
  timeout: 2000,
  transition: transitions.FADE,
};

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <Router history={history}>
        <App />
      </Router>
    </AlertProvider>
  </Provider>,
  document.getElementById("app")
);
