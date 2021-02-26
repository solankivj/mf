import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../container/Home';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Suspense fallback={null}>
        <Route exact path="/" component={Home} />
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default Router;
