import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Service1 from "./Service1";
import Service2 from "./Service2";
import { HashRouter, Route } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/serviceDetails/W92931" component={Service1} />
      <Route path="/serviceDetails/W92443" component={Service2} />
    </div>
  </HashRouter>,
  document.getElementById("root")
);
