import { useState } from "react";
import "./App.css";
import {Task} from './Task'

function App() {
  const [todoList,setTodoList] = useState([]);
  const[newTask,setNewTask] = useState("");

  const handleChangeFunction = (event)=>
  {
    setNewTask(event.target.value)
  };
  const addTask =()=>{
    setTodoList([...todoList,newTask]);
    
  };
  const deleteTask=(i)=>{
    setTodoList(todoList.filter((_t,index)=>index!==i));
  };

  return (
    <div className='App'>
      <div className="addTask">
        <input type="text" onChange={handleChangeFunction}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task,i)=>{
          return<Task task={task} i={i} deleteTask={deleteTask}/>
        })}
      </div>
      
    </div>
  );
}


export default App;
