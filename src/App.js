/* eslint-disable import/no-extraneous-dependencies */
// @flow

import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'unistore/react';

import store from './store';
import AppRoutes from './routes';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default hot(App);
