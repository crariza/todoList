import '../App.css'

function TodoCounter ({completed,total}) {
  return (
    <h1 className='counter'>
        Has completado {completed} tareas de {total} 
    </h1>
  )
}

export default TodoCounter