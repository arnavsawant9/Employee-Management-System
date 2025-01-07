import React, {useState, useEffect} from 'react'

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('')
  
  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("pagal")
  }

return (
  <>
    <form onSubmit={submitHandler}>
      <div className='p-20 flex flex-col '>
          <h3 className='pb-2 text-2xl'>Task Title</h3>
          <input placeholder='Make a UI design' type='text' className='placeholder-black text-black p-2 outline-none rounded-xl bg-gray-400' />


          <h3 className='pb-2 text-2xl pt-10'>Description</h3>
          <textarea cols="30" rows="10" type='text' className='text-black p-2 outline-none rounded-xl bg-gray-400'></textarea>

          <h3 className='pb-2 text-2xl pt-10'>Date</h3>
          <input type='date' className='text-black p-2 outline-none rounded-xl bg-gray-400'/>

          <h3 className='pb-2 text-2xl pt-10'>Assign to</h3>
          <input placeholder='' type='text' className='text-black p-2 outline-none rounded-xl bg-gray-400' />

          <h3 className='pb-2 text-2xl pt-10'>Category</h3>
          <input placeholder='Design, Development etc...' type='text' className='placeholder-black text-black p-2 outline-none rounded-xl bg-gray-400 pb-3' />
          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
      </div>
    </form>
  </>
)
}

export default CreateTask