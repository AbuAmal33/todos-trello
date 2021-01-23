import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../redux/actions';
import Checking from './Checking';

function Content(props) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div className="todo">
            <div className="input">
              <Checking todo={todo} key={todo.id} />
            </div>
            <div className="title">{todo.title}</div>
            <div className="btn">
              <button onClick={() => handleDelete(todo.id)}>delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Content;
