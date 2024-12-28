import React from 'react'

const TaskLists = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 px-5 screen'>
        <div className='w-[45%] bg-red-400 py-5 px-10 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>New task</h3>
        </div>
        <div className='w-[45%] bg-blue-400 py-5 px-10 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>New task</h3>
        </div>
        <div className='w-[45%] bg-yellow-400 py-5 px-10 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>New task</h3>
        </div>
        <div className='w-[45%] bg-green-400 py-5 px-10 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>New task</h3>
        </div>
    </div>
  )
}

export default TaskLists