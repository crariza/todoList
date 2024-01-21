import { useState } from "react";


function TodoItem({text,completed,index,todos,setTodos}) {

  const [editText, seteditText] = useState(todos[index].text)
  const [editable, setEditable] = useState(false)

  function deleteTodo(i){
    const taskList = [...todos]
    taskList.splice(i,1)
    setTodos(taskList)
  }

  function checkTodo(i){
    const taskList = [...todos]
    taskList[i].completed = !taskList[i].completed
    setTodos(taskList)
  }

  function editTask (e,i) {
    if (e.key === "Enter" && editText!=="") {
      const taskList= [...todos]
      taskList[i].text = editText;
      setTodos(taskList)
      setEditable(false)
    } else if (e.key === "Escape") {
      setEditable(false)
    }
  }

  return (
    <li className="TodoItem">
      <input
        type="checkbox"
        className={`Icon Icon-check ${completed && "Icon-check--active"} ${editable ? "hide" : "show"}`} 
        onClick={()=>checkTodo(index)}
      />
      {editable? 
        <input
        className="editTaskText"
        type="text"
        autoFocus={true}
        value={editText}
        onChange={(event)=>seteditText(event.target.value)} 
        onKeyDown={(event)=>editTask(event,index)}
        /> :
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`} onClick={()=>setEditable(true)}>
        {text}
      </p>
      }
 
      <span 
        className={`Icon Icon-delete ${editable ? "hide" : "show"}`} 
        onClick={()=>deleteTodo(index)}>X</span>
    </li>
  );
}
export default TodoItem;