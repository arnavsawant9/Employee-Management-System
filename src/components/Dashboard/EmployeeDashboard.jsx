import React, {useState} from 'react'
import Header from '../others/Header'
import TaskLists from '../others/TaskLists'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <>
    <div className='bg-[#1C1C1C]'>
        {data && <Header userData={data}/>}
    </div>
    <div>
        {data && <TaskLists dataTaskCount={data}/>}
        {data && <TaskList taskData={data}/>}
    </div>
    </>
  )
}
export default EmployeeDashboard