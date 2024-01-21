function CreateTodoButton({setTodos, todos, searchValue, setsearchValue}) {

  function addTodo(todoText){
    if (searchValue!=="") { 
      setTodos([...todos,{text:todoText, completed: false}])
      setsearchValue("")
    }
  } 

  return <button className="CreateTodoButton" onClick={()=>addTodo(searchValue)}>+</button>;
}
export default CreateTodoButton;