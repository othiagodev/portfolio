import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './views/Home';
import Project from './views/Project';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/p" exact component={Project} />
        <Route path="/h" exact component={Home} />
        <Redirect from="/*" to="/h" />
      </Switch>
    </BrowserRouter>
  );
}
