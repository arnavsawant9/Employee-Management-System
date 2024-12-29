import React from 'react'
import Header from "../others/Header"

const AdminDashboard = () => {
  return (
    <div>
        <Header />
        <div className='p-20 flex flex-col '>
                <h3 className='pb-2 text-2xl'>Task Title</h3>
                <input placeholder='Make a UI design' type='text' className='text-white p-1 outline-none rounded-xl bg-gray-300' />


                <h3 className='pb-2 text-2xl pt-10'>Description</h3>
                <textarea cols="30" rows="10" type='text' className='text-white p-1 outline-none rounded-xl bg-gray-300'>Describe the work</textarea>

                <h3 className='pb-2 text-2xl pt-10'>Date</h3>
                <input type='date' className='text-white p-1 outline-none rounded-xl bg-gray-300'/>

                <h3 className='pb-2 text-2xl pt-10'>Assign to</h3>
                <input placeholder='' type='text' className='text-white p-1 outline-none rounded-xl bg-gray-300' />

                <h3 className='pb-2 text-2xl pt-10'>Category</h3>
                <input placeholder='Design, Development etc...' type='text' className='text-white p-1 outline-none rounded-xl bg-gray-300' />
        </div>
    </div>
  )
}

export default AdminDashboard