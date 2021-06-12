import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './views/Home';
import Project from './views/Project';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/h" exact component={Home} />
        <Route path="/p" exact component={Project} />
        <Redirect from="/*" to="/h" />
      </Switch>
    </BrowserRouter>
  );
}
