import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
