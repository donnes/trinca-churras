import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

// Pages
import Login from '../pages/login';
import Home from '../pages/home';
import Detail from '../pages/detail';
import Schedule from '../pages/schedule';

export const AppRouter = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/login" component={Login} exact />
      <Route path="/" component={Home} exact />
      <Route path="/:id" component={Detail} exact />
      <Route path="/schedule" component={Schedule} extact />
    </Switch>
  </Router>
);
