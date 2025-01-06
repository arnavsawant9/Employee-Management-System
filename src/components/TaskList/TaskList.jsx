import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({taskData}) => {
  return (
  <div id="tasklist" className="h-[40vh] px-4 margin-0 overflow-x-auto flex items-start justify-start gap-5 flex-nowrap mt-10">
    {/* <AcceptTask acceptedData = {taskData}/>
    <NewTask newTaskData={taskData}/>
    <CompleteTask completedTaskData={taskData}/>
    <FailedTask failedTaskData={taskData}/> */}
    
    {taskData.tasks.map((elem, idx)=>{
      console.log(1);
        if(elem.active){
          return <AcceptTask key={idx} acceptedData={elem}/>
        }
        console.log(2);
        if(elem.newTask){
          return <NewTask key={idx} newTaskData={elem}/>
        }
        console.log(3);
        if(elem.completed){
          return <CompleteTask key={idx} completedTaskData={elem}/>
        }
        console.log(4);
        if(elem.failed){
          return <FailedTask key={idx} failedTaskData={elem}/>
        }
        console.log(5);
    })}
</div>
  
  )
}

export default TaskList