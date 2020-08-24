import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import rootReducer from "./reducers/index";

import { createStore } from "redux";

import App from "./App";
const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
