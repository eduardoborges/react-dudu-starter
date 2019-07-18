import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from '~/screens/welcome'

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Welcome} />
      </Switch>
    </Router>
  );
}
