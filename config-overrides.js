/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable flowtype/no-mixed */
const { override, useEslintRc, useBabelRc } = require('customize-cra');

module.exports = override(
  useEslintRc(),
  useBabelRc(),
);
