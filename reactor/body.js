import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './router';

const Router = () => (
  <div className="body-wrap">
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </div>
);

export default Router;
