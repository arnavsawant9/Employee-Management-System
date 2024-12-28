import React, {useState} from 'react'
import Header from '../others/Header'
import TaskLists from '../others/TaskLists'

const EmployeeDashboard = () => {
  return (
    <>
    <div className='bg-[#1C1C1C]'>
        <Header />
    </div>
    <div>
        <TaskLists/>
    </div>
    </>
  )
}

export default EmployeeDashboard