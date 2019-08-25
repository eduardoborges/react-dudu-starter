/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const { override, useBabelRc, addWebpackAlias } = require('customize-cra');

module.exports = override(
  useBabelRc(),
  addWebpackAlias({ 'react-dom': '@hot-loader/react-dom' }),
);
