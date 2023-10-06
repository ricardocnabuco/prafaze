import { useState } from 'react'
import './App.css'
import Todo     from './components/Todo'
import TodoForm from './components/TodoForm';
import Filter   from './components/Filter';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar REACT/NEXT",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "lazer",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Comprar frutas e verduras",
      category: "casa",
      isCompleted: false,
    }
  ]);

  const [filter, setFilter] = useState("All");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random()*10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1>PraFazê</h1>
      <TodoForm addTodo = {addTodo}/>
      <Filter filter={filter} setFilter={setFilter} />
      <div className="todo-list">
        {todos
          .filter ((todo) => (
            filter === "All" 
              ? true 
              : filter === "Completed" 
              ? todo.isCompleted 
              : !todo.isCompleted
          ))
          .map((todo) => (
            <Todo key={todo.id} 
                  todo={todo} 
                  removeTodo={removeTodo} 
                  completeTodo={completeTodo}/>
          ))
        }
      </div>
    </div>
  )
}

export default App