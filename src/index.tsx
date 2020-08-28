import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Index from "./pages";
import { Provider } from "react-redux";
import RoomApp from "./reducer";
import { createStore } from "redux";
const store: any = createStore(RoomApp, {});

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Provider store={store}>
          <Route path="/dashboard" component={Dashboard} />
        </Provider>
        <Route path="/" component={Index} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
