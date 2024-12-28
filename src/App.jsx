import React from 'react'
import Login from "./components/Auth/login";
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import Header from './components/others/Header';

const App = () => {
  return (
    <div>
      {/* <Login/> */}
      <EmployeeDashboard/>
    </div>
  )
}

export default App