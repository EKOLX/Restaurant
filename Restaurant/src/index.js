import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "@fortawesome/react-fontawesome";
import * as serviceWorker from "./serviceWorker";
import App from "../src/containers/App";
import headerReducer from "./store/reducers/header";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  header: headerReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
