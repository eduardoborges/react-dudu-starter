import createStore from 'unistore';
import devtools from 'unistore/devtools';

import { TodoState } from './todo/types';

export interface AppState {
  TODOS: TodoState,
}

const initialState: AppState = {
  TODOS: {
    data: [],
    loading: false,
    error: false,
  },
};

const store = process.env.NODE_ENV === 'production'
  ? createStore(initialState) : devtools(createStore(initialState));

export default store;
