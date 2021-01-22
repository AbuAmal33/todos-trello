const initialState = {
  todos: [],
  loadingTodos: false,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/load/start':
      return {
        ...state,
        loadingTodos: true,
      };

    case 'todos/load/success':
      return {
        ...state,
        todos: action.payload,
        loadingTodos: false,
      };

    case 'delete':
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          if (todo.id === action.payload) {
            return false;
          }
          return true;
        }),
      };

    default:
      return state;
  }
};

export default todosReducer;
