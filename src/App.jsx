import React from "react";
import { useState, useEffect } from 'react';
import TodoCounter  from "./Components/TodoCounter";
import SearchTodo from "./Components/SearchTodo";
import TodoList from "./Components/TodoList";
import TodoItem from "./Components/TodoItem";
import CreateTodoButton from "./Components/CreateTodoButton";
function App() {

  const [todos, setTodos] = useState([])
  const [searchValue, setsearchValue] = useState('')
  const completedTodos = todos.filter(todo =>todo.completed).length
  const totalTodos = todos.length
  const searchedTodos = todos.filter(
    (todo)=>(
      todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
    ))

  useEffect(()=>{
    let data = localStorage.getItem('tareas')
    if (data) {
      setTodos(JSON.parse(data))
    }
  },[])

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(todos))
  }, [todos])
  
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <SearchTodo searchValue={searchValue} setsearchValue={setsearchValue} todos={todos} setTodos={setTodos}/>
      <TodoList>
        {todos.map((todo,i) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            index={i}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </TodoList>
      <CreateTodoButton setTodos={setTodos} todos={todos} searchValue={searchValue} setsearchValue={setsearchValue}/>
    </>
  );
}
export default App;