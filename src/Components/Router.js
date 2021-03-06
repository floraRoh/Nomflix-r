import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";
import Detail from "Routes/Detail";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router basename="/Nomflix-r">
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/tv" exact component={TV} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/tv/:id" component={Detail} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
