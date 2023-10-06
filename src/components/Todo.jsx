import React from 'react'

const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
      // eslint-disable-next-line react/jsx-key
    <div className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}>
      <div className="content">
        <p>[{todo.id}] - {todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodo(todo.id)}>Completar</button>
        <button className="exclusao" onClick={() => removeTodo(todo.id)}>Excluir</button>
      </div>
    </div>
  
  )
}

export default Todo