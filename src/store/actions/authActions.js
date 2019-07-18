/* eslint-disable no-unused-vars */
// @flow

import type { State, Store } from "../types";

type Credentials = {
  email: string,
  password: string
};

type AuthActionTypes = {
  login: (credentials: Credentials) => {}
};

const actions = (store: Store) => ({
  //
  async login(state: State, credentials: Credentials) {
    const { email, password } = credentials;
    return state;
  },

  //
  async logout(state: State) {
    return state;
  },

  //
  async refreshToken(state: State) {
    return state;
  }
});

export default actions;
