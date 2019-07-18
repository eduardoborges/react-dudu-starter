/* eslint-disable no-unused-vars */
// @flow

import type { State, Store, Todo } from "../types";

const actions = (store: Store) => ({
  //
  async add(state: State, todo: Todo) {
    const TODO = { ...state.TODO };
    return {
      TODO: {
        ...TODO,
        data: [...TODO.data, todo],
        isLoading: false
      }
    };
  },

  //
  async remove(state: State, todoId: number) {
    const TODO = { ...state.TODO };
    return {
      TODO: {
        ...TODO,
        data: [...TODO.data.filter(item => item.id !== todoId)],
        isLoading: false
      }
    };
  },

  //
  async setDone(state: State, isDone: boolean, todoId: number) {
    const TODO = { ...state.TODO };
    return {
      TODO: {
        ...TODO,
        data: [
          ...TODO.data.map(item => {
            if (todoId === item.id) {
              item.isDone = isDone;
            }
            return item;
          })
        ],
        isLoading: false
      }
    };
  }
});

export default actions;
