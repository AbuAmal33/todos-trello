export const loadTodos = () => {
  return (dispatch) => {
    dispatch({
      type: 'todos/load/start',
    });

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'todos/load/success',
          payload: json,
        });
      });
  };
};

export const removeTodo = (id) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'delete',
          payload: id,
        });
      });
  };
};

export const CheckTodo = (id, completed) => {
  return (dispatch) => {
    dispatch({
      type: 'todos/check/start',
      payload: id,
    });
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ completed: !completed }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: 'todos/check/success',
          payload: id,
        });
      });
  };
};
