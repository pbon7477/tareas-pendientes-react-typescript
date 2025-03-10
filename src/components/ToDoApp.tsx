import { useState } from "react";
import ListaTareas from "./ListaTareas";

const ToDoApp = () => {

  const [nuevaTarea,setNuevaTarea] = useState<string>('');  
  const [listaTarea, setListaTarea] = useState<string[]>([]);

  const handleAddtask = ()=>{

    if(nuevaTarea.trim() == '') return;

    setListaTarea(  ( tareasExistentes )=> [ ...tareasExistentes, nuevaTarea ] );
    setNuevaTarea('');
  }

  const handleBorrarTarea = (index:number)=>{

    setListaTarea( ( tareasExistentes )=>  tareasExistentes.filter( (tarea, i) =>  i !== index ) )

  }

  return (
    <>
    <h1>Lista de tareas</h1>    
    <input 
      type="text" 
      id=""
      value={nuevaTarea}
      onChange={(e)=>setNuevaTarea(e.target.value)}
       />
      <center><button onClick={handleAddtask} >Agregar</button></center>

      <ListaTareas listaTareas={listaTarea} borrarTarea={handleBorrarTarea} />
    </>
  )
}

export default ToDoApp;