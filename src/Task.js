export const Task =(props)=>{
  return (
  <div className="task">
    <h2>{props.task}</h2>
    <button onClick={()=>{props.deleteTask(props.i)}}>X</button>
  </div>
  );
};