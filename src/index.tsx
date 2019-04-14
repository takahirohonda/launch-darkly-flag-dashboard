import * as React from "react";
import * as ReactDOM from "react-dom";
import "../public/css/bootstrap.css";
import "../public/css/style.css";
import AppWithAuth from "./AppWithAuth";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { Auth } from "aws-amplify";
import awsmobile from "../config/aws-exports";
Auth.configure(awsmobile);

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <AppWithAuth />
  </Provider>,
  document.getElementById("root")
);
