import * as React from 'react';
import { Router } from '@reach/router';

import Welcome from './screens/welcome';

export default () => (
  <Router>
    <Welcome path="/" />
  </Router>
);
