const initialState = {
  todos: []
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/load/start':
      return {
        ...state
      }

    case 'todos/load/success':
      return {
        ...state,
        todos: action.payload
      }

    default:
      return state;
  }
}

export default todosReducer;