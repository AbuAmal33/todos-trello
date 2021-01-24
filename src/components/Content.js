import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../redux/actions';
import Checking from './Checking';
import Button from './Button';

function Content(props) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="container">
      {todos.map((todo) => {
        return (
          <div className="todo">
            <div className="input">
              <Checking todo={todo} key={todo.id} />
            </div>
            <div className="title">{todo.title}</div>
            <Button
              size="small"
              radius={10}
              onClick={() => handleDelete(todo.id)}
              todo={todo}
            >
              delete
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default Content;
