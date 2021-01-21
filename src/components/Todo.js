import React from 'react'

function Todo (props) {
  return (
    <div className="todo">
      {props.todo.title}
    </div>
  )
}

export default Todo
