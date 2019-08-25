/* eslint-disable @typescript-eslint/no-unused-vars */

import { Store } from 'unistore';

import { AppState } from '../index';

export default (store:Store<AppState>) => ({
    addTodo: (state: AppState) => ({
      TODOS: {
        ...state.TODOS,
        data: [...state.TODOS.data, { name: 'Teste', id: state.TODOS.data.length + 1, done: false }],
      },
    }),

    toggleTodo: (state: AppState) => ({
      TODOS: {
        ...state.TODOS,
      },
    }),

    removeTodo: (state: AppState) => ({
      TODOS: {
        ...state.TODOS,
      },
    }),


});
