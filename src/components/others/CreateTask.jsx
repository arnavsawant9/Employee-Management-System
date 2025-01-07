import React, {useState, useEffect} from 'react'

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})
  
  const submitHandler = (e) =>{
    e.preventDefault()

    setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })
    const data = JSON.parse(localStorage.getItem("employees"));
    data.forEach(employee =>{
        if(assignTo === employee.name){
          employee.tasks.push(newTask);
          console.log(employee)
        } // see the thing is i am taking the data from the localStorage and then what i am doing is parsing over it and then pushing my new task that i created into the tasks of the employee


    })
    

    //console.log(taskTitle, taskDescription, taskDate, assignTo, category)
    setAssignTo('')
    setCategory("")
    setTaskDescription("")
    setTaskTitle("")
    settaskDate("")
  }

return (
  <>
    <form onSubmit={submitHandler}>
      <div className='p-20 flex flex-col '>
          <h3 className='pb-2 text-2xl'>Task Title</h3>
          <input 
          value={taskTitle}
          onChange={(e)=>{
            setTaskTitle(e.target.value)
          }}
          placeholder='Make a UI design' type='text' className='placeholder-black text-black p-2 outline-none rounded-xl bg-gray-400' 
          />


          <h3 className='pb-2 text-2xl pt-10'>Description</h3>
          <textarea
          value={taskDescription}
          onChange={(e)=>{
            setTaskDescription(e.target.value)
          }}
          cols="30" rows="10" type='text' className='text-black p-2 outline-none rounded-xl bg-gray-400'></textarea>

          <h3 className='pb-2 text-2xl pt-10'>Date</h3>
          <input 
          value={taskDate}
          onChange={(e)=>{
            settaskDate(e.target.value)
          }}
          type='date' className='text-black p-2 outline-none rounded-xl bg-gray-400'/>

          <h3 className='pb-2 text-2xl pt-10'>Assign to</h3>
          <input 
          value={assignTo}
          onChange={(e)=>{
            setAssignTo(e.target.value)
          }}
          placeholder='' type='text' className='text-black p-2 outline-none rounded-xl bg-gray-400' />

          <h3 className='pb-2 text-2xl pt-10'>Category</h3>
          <input 
          value={category}
          onChange={(e)=>{
            setCategory(e.target.value)
          }}
          placeholder='Design, Development etc...' type='text' className='placeholder-black text-black p-2 outline-none rounded-xl bg-gray-400 pb-3' />
          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
      </div>
    </form>
  </>
)
}

export default CreateTask