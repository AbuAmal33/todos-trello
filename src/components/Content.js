import React from 'react';
import { useSelector } from 'react-redux'
import Todo from './Todo'

function Content (props) {
  const todos = useSelector(state => state.todos);

  return (
    <div>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo}/>
      })}
    </div>
  )
}

export default Content;