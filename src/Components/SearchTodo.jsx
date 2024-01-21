function SearchTodo({searchValue, setsearchValue, todos, setTodos}) {

  function addTodo(todoText, e){
    if (e.key === "Enter" && searchValue!=="") {
      setTodos([...todos,{text:todoText, completed: false}])
      setsearchValue("")
    }
  } 

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setsearchValue(event.target.value)
      }}
      onKeyDown={(event)=>addTodo(searchValue,event)}
    />
  );
}

export default SearchTodo;