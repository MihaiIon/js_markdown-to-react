import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";

// Styles
import "./scss/main.scss";

// Components
import App from "./components/App";

if (module.hot) {
  module.hot.accept();
}

// Render App
ReactDOM.render(<App />, document.getElementById("root"));
