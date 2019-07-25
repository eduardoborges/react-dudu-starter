/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
// @flow
import React, { useState } from 'react';
import { connect } from 'unistore/react';
import { todoActions } from '~/store/actions';
import { State } from '~/store/types';

const mapStateToProps = state => ({ state });

function WelcomeScreen(props) {
  const { TODO }: State = props.state;

  const [todo, setTodo] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();
    props.add({
      id: Date.now(),
      name: todo,
      isDone: false,
    });
    setTodo('');
  };

  const handleRemove = async (todoId) => {
    //
    await props.remove(todoId);
  };

  const setMarked = async (isDone, todoId) => {
    props.setDone(isDone, todoId);
  };

  return (
    <div id="login-screen" className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="sub-title is-0">React Dudão Starter</h1>
          <h1 className="title has-text-weight-bold" style={{ fontSize: 70 }}>
            Hello world!
          </h1>

          <br />

          <form className="columns" onSubmit={handleAdd}>
            <div className="column">
              <div className="field">
                <div className={`control ${TODO.isLoading && 'is-loading'}`}>
                  <input
                    type="text"
                    className="input"
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <button className="button is-dark">Adicionar</button>
            </div>
          </form>
          {/*  */}

          <div className="columns">
            <div className="column">
              {TODO.data.map(todo => (
                <li key={todo.id}>
                  <input
                    type="checkbox"
                    defaultChecked={todo.isDone}
                    onChange={e => setMarked(e.target.checked, todo.id)}
                  />
                  {' '}
                  <span
                    style={{ textDecoration: todo.isDone && 'line-through' }}
                  >
                    {todo.name}
                  </span>
                  {' '}
                  <a onClick={() => handleRemove(todo.id)}>Remove</a>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  todoActions,
)(WelcomeScreen);
