import { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    // adicionar os campos
    addTodo(value, category)
    // limpar campos
    setValue("")
    setCategory("")
    /* console.log("enviou form!"); */
    console.log(value, category);
  }

  return (
    <div className="todo-form">
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder=' Digite uma tarefa ...' 
          value = {value}
          onChange={(e) => setValue(e.target.value)} 
        />
        <select value = {category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Casa">Casa</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Lazer">Lazer</option>
        </select>
        <button type="submit"> Adicionar tarefa </button>
      </form>
    </div>
  )
}

export default TodoForm