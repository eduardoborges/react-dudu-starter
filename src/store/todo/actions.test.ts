/* disabe eslint */
import store from 'store';
import actions from './actions';
import { Todo } from './types';

describe('Todo actions', () => {
  const initalState = store.getState();
  const todo : Todo = { id: 1, name: 'Teste', done: false };

  it('add todo', async () => {
    await store.setState(initalState);
    const { addTodo } = actions(store);

    await store.setState(await addTodo(store.getState(), todo.name));

    expect(store.getState().TODOS.data).toHaveLength(1);
  });

  it('remove todo', async () => {
    await store.setState(initalState);
    const { addTodo, removeTodo } = actions(store);

    await store.setState(await addTodo(store.getState(), todo.name));
    await store.setState(await addTodo(store.getState(), todo.name));
    await store.setState(await addTodo(store.getState(), todo.name));

    await store.setState(await removeTodo(store.getState(), await store.getState().TODOS.data[0]));

    expect(store.getState().TODOS.data).toHaveLength(2);
  });
});
