import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login";
import Register from "./components/Register";
import Reporter from "./components/Reporter";
import NotFound from "./components/NotFound"

export default class Speakly extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reporter" component={Reporter} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
