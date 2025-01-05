import React from 'react'

const TaskLists = ({dataTaskCount}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 px-5 screen'>
        <div className='w-[45%] bg-red-400 py-5 px-10 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{dataTaskCount.taskCount.newTask}</h2>
            <h3 className='text-2xl font-medium'>New task</h3>
        </div>
        <div className='w-[45%] bg-blue-400 py-5 px-10 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{dataTaskCount.taskCount.active}</h2>
            <h3 className='text-2xl font-medium'>Active task</h3>
        </div>
        <div className='w-[45%] bg-yellow-400 py-5 px-10 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{dataTaskCount.taskCount.completed}</h2>
            <h3 className='text-2xl font-medium'>Completed task</h3>
        </div>
        <div className='w-[45%] bg-green-400 py-5 px-10 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{dataTaskCount.taskCount.failed}</h2>
            <h3 className='text-2xl font-medium'>Failed task</h3>
        </div>
    </div>
  )
}

export default TaskLists