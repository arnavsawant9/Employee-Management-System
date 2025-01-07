import React from 'react'
import Header from "../others/Header"
import AllTask from '../others/AllTask'
import CreateTask from '../others/CreateTask'

const AdminDashboard = () => {
  return (
    <div>
        {/* <Header /> */}
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard