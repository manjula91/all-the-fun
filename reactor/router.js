import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Home2021 from './pages/home2021';
import Subscribe from './pages/subscribe';
import Tickets from './pages/tickets';
import Workshop from './pages/workshop';
import Footer from './footer';

import Root from './pages/root';

const AppRouter = () => (
  <>
    <Switch>
      <Route path="/" component={process.env.REMOTE === 'Home2021' ? Home2021 : Root} exact />
      <Route path="/conferences/2019" component={Home} exact />
      <Route path="/conferences/2021" component={Home2021} exact />
      <Route path="/subscribe" component={Subscribe} exact />
      <Route path="/tickets" component={Tickets} exact />
      <Route path="/workshop" component={Workshop} exact />
    </Switch>
    <Footer />
  </>
);

export default AppRouter;
