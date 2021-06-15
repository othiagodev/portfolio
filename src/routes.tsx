import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './views/Home';
import NotFound from './views/NotFound';
import Project from './views/Project';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/h" exact component={Home} />
        <Route path="/p" exact component={Project} />
        <Route path="/404" exact component={NotFound} />
        <Route path="/*/*" component={NotFound} />
        <Redirect from="/*" to="/h" />
      </Switch>
    </BrowserRouter>
  );
}
