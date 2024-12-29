import React from 'react'

const TaskList = () => {
  return (
    <div id="tasklist" className="h-[40vh] px-4 margin-0 overflow-x-auto flex items-center justify-start gap-5 flex-nowrap  mt-10">
        <div className="h-[65%] flex-shrink-0 w-[300px] bg-red-400 rounded-xl p-3 flex">
            {/* <div className='flex items-center justify-between'>
                <h3 className='bg-red-500 px-2 py-1 rounded-md'>High</h3>
                <h4 className='ml-auto'>20 feb 2024</h4>
            </div>    */}
            <div class="bg-red-400 rounded-xl p-2 flex items-center justify-between w-96">
                <h2 class="bg-red-500 text-white px-2 py-1 rounded-md">High</h2>
                <h3 class="text-white">20 Feb 2024</h3>
            </div>
        </div>
    </div>
  )
}

export default TaskList