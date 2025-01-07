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
    
    {taskData.tasks.map((elem, idx) => {
  return (
    <React.Fragment key={idx}>
      {elem.active && <AcceptTask acceptedData={elem} />}
      {elem.newTask && <NewTask newTaskData={elem} />}
      {elem.completed && <CompleteTask completedTaskData={elem} />}
      {elem.failed && <FailedTask failedTaskData={elem} />}
    </React.Fragment>
  );
  })}

</div>
  
  )
}

export default TaskList