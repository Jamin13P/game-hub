import React from "react";
import { Switch, Route } from "react-router-dom";
import Account from "./components/Account/Account";
import Auth from "./components/Auth/Auth";
import Creator from "./components/Creator/Creator";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register"

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/account" component={Account} />
    <Route path="/creator" component={Creator} />
    <Route path="/home" component={Home} />
    <Route path="/register" component={Register} />
  </Switch>
);
