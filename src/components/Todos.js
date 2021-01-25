import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos, removeTodo } from '../redux/actions';
import Checking from './Checking';
import Button from './Button';
import Todo from './Todo';
import ReactLoading from 'react-loading';

function Todos(props) {
  const todos = useSelector((state) => state.todos.todos);
  const loading = useSelector((state) => state.todos.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      {loading ? (
        <ReactLoading color="red" />
      ) : (
        todos.map((todo, index) => {
          return (
            <div className="todo" key={todo.id}>
              <Checking todo={todo} />
              <Todo todo={todo} />
              <Button
                size="small"
                radius={10}
                onClick={() => handleDelete(todo.id)}
                todo={todo}
                children="delete"
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default Todos;
