import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "@fortawesome/react-fontawesome";
import * as serviceWorker from "./serviceWorker";
import App from "../src/containers/App";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
