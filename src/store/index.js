// @flow
import createStore from "unistore";
import persistStore from "unissist";
import devtools from "unistore/devtools";
import indexedDBAdapter from "unissist/integrations/indexdbAdapter";
import { State } from "./types";

const blankState: State = {
  AUTH: {
    isAuth: false,
    token: null
  },
  USER: {
    isLoading: false
  },
  TODO: {
    data: [],
    isLoading: true,
    isFeched: false
  },
  FOO: "BAR"
};

let store =
  process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test"
    ? createStore(blankState)
    : devtools(createStore(blankState));

const adapter = indexedDBAdapter();
persistStore(store, adapter);

export default store;
