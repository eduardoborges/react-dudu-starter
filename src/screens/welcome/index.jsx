/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
// @flow
import React, { useState } from 'react';
import { connect } from 'unistore/react';
import { todoActions } from '~/store/actions';
import { State } from '~/store/types';

const mapStateToProps = ({ TODO }) => ({ TODO });

function WelcomeScreen(props) {
  const state: State = props;
  const { TODO } = state;

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
                    minLength={5}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <button type="submit" className="button is-dark">Adicionar</button>
            </div>
          </form>
          {/*  */}

          <div className="columns">
            <div className="column">
              {TODO.data.map(item => (
                <li key={item.id}>
                  <input
                    type="checkbox"
                    defaultChecked={item.isDone}
                    onChange={e => setMarked(e.target.checked, item.id)}
                  />
                  <span style={{ textDecoration: item.isDone && 'line-through', margin: '0 10px' }}>
                    {item.name}
                  </span>
                  <button type="button" onClick={() => handleRemove(item.id)}>Remove</button>
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
