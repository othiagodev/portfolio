import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import Project from './views/Project';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projetos" exact component={Project} />
      </Switch>
    </BrowserRouter>
  );
}
