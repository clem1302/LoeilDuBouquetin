import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import * as serviceWorker from "./serviceWorker";
import Router from "./components/Router";

export class App extends React.Component {
  render() {
    return (
        <Router />
    );
  }
}

export default ReactDOM.render(
  <App />,
  document.getElementById("root") || document.createElement("div")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
