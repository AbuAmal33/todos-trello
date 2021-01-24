import React from 'react';
import ReactLoading from 'react-loading';
import { CheckTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';

function Checking(props) {
  const dispatch = useDispatch();

  const handleCheck = (id, completed) => {
    dispatch(CheckTodo(id, completed));
  };

  return props.todo.checking ? (
    <ReactLoading
      color="blue"
      type="spin"
      width={16}
      height={16}
      className="spin"
    />
  ) : (
    <input
      type="checkbox"
      checked={props.todo.completed}
      onChange={() => handleCheck(props.todo.id, props.todo.completed)}
    />
  );
}

export default Checking;
