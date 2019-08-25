import * as React from 'react';
import { Router } from '@reach/router';

import Login from './screens/login';

export default () => (
  <Router>
    <Login path="/" />
  </Router>
);
