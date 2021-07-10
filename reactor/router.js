import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/2019/home';
import Home2021 from 'pages/2021/home';
import Subscribe from 'components/subscribe';
import Tickets2021 from 'pages/2021/tickets';
import Workshop from 'components/workshop';
import Footer from 'components/footer';

import Root from 'pages/root';

const AppRouter = () => (
  <>
    <Switch>
      <Route path="/" component={Home2021} exact />
      <Route path="/conferences/2019" component={Home} exact />
      <Route path="/conferences/2021" component={Home2021} exact />
      <Route path="/workshop/2021" component={Workshop} exact />
      <Route path="/tickets/2021" component={Tickets2021} exact />
      <Route path="/subscribe" component={Subscribe} exact />
      <Route path="/about" component={Root} exact />
    </Switch>
    <Footer />
  </>
);

export default AppRouter;
