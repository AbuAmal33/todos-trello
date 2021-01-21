const initialState = {
  todos: [],
  loadingTodos: false
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/load/start':
      return {
        ...state,
        loadingTodos: true
      }

    case 'todos/load/success':
      return {
        ...state,
        todos: action.payload,
        loadingTodos: false
      }

    default:
      return state;
  }
}

export default todosReducer;