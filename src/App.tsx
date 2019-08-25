import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'unistore/react';
import store from './store';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default hot(App);
