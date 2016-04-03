import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import AppointmentFormPage from './containers/AppointmentFormPage.js';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AppointmentFormPage} />
    <Route path="About" component={AboutPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
