/* eslint-disable @typescript-eslint/no-unused-vars */

import { Store, ActionCreator } from 'unistore';
import { AppState } from '../index';
import { Todo } from './types';

const actions : ActionCreator<AppState> = (store:Store<AppState>) => ({
    addTodo: (state: AppState, todoValue: string) => ({
      TODOS: {
        ...state.TODOS,
        data: [...state.TODOS.data,
          { name: todoValue, id: state.TODOS.data.length + 1, done: false },
        ],
      },
    }),

    toggleTodo: (state: AppState, todo: Todo) => ({
      TODOS: {
        ...state.TODOS,
        data: state.TODOS.data.map(t => (t.id === todo.id ? ({ ...t, done: !t.done }) : t)),
      },
    }),

    removeTodo: (state: AppState, todo: Todo) => ({
      TODOS: {
        ...state.TODOS,
        data: state.TODOS.data.filter(td => td.id !== todo.id),
      },
    }),


});


export default actions;
