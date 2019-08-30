import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { connect } from 'unistore/react';
import { TodoState, TodoActions } from 'store/todo/types';
import todoActions from 'store/todo/actions';

interface StateProps {
  TODOS: TodoState
}
interface OwnProps {
  bar?:boolean
}

type Props = StateProps & TodoActions & OwnProps & RouteComponentProps;

const Login : React.FC<Props> = (props) => {
  const {
 TODOS, addTodo, removeTodo, toggleTodo,
} = props;
  const [value, setValue] = useState<string | undefined>('');
  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Hello world!</h1>
          <div className="columns">
            <div className="column">
              <input className="input" value={value} onChange={e => setValue(e.target.value)} />
            </div>
            <div className="column">
              <button className="button is-primary" type="button" onClick={() => addTodo(value)}>Add Todo</button>
            </div>
          </div>
          <ul>
            {TODOS.data.map(todo => (
              <li>
                <input checked={todo.done} type="checkbox" name="" id="" onChange={() => toggleTodo(todo)} />
                {' '}
                {todo.name}
                {' '}
                <button type="button" className="button is-small is-text" onClick={() => removeTodo(todo)}>remove</button>
                {' '}
              </li>
            ))}

          </ul>
        </div>

      </div>

    </div>
);
};


export default connect('TODOS', todoActions)(Login);
