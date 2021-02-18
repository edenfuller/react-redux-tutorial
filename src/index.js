import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers/index";

import App from "./App";
import Checkout from "./components/Checkout";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
console.log(rootElement);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

const checkoutElement = document.getElementById("checkout-render");
console.log(checkoutElement);
ReactDOM.render(
  <Provider store={store}>
    <Checkout />
  </Provider>,
  checkoutElement
);
