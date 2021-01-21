const loadTodos = () => {
  return dispatch => {
    dispatch ({
      type: 'todos/load/start'
    });

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        dispatch({
          type:'todos/load/success',
          payload: json
        })
      })
  }
}

export default loadTodos;

