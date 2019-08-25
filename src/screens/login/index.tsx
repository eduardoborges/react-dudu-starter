/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { connect } from 'unistore/react';
import { TodoState } from 'store/todo/types';
import todoActions from 'store/todo/actions';

interface StateProps {
  TODOS: TodoState
}

interface ActionsProps {
  addTodo(): void
}

interface OwnProps {
  bar?:boolean
}

type Props = StateProps & ActionsProps & OwnProps & RouteComponentProps;

const Login = (props:Props) => {
  const { TODOS, addTodo } = props;
  return (
    <div>
      <button className="button" type="button" onClick={addTodo}>Add Tosdo</button>
      <ul>{TODOS.data.map(todo => (<li>{todo.name}</li>))}</ul>
    </div>
);
};


export default connect('TODOS', todoActions)(Login);
