import React, { useContext, useEffect } from 'react'
import Login from "./components/Auth/login";
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import Header from './components/others/Header';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { useState } from 'react';
import { AuthContext } from './context/AuthProvider';

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null)
  const authData = useContext(AuthContext)
 // console.log(authData);
  useEffect(() => {
    if(authData){
      const loggedUser = localStorage.getItem("loggedUser")
      if(loggedUser){
        // setUser(loggedUser.role);
        setUser(JSON.parse(loggedUser).role)
      }
    }
  }, [authData])
  

  useEffect(()=>{
    setLocalStorage();
    getLocalStorage();
  },[])

  const handleLogin = (email, password) =>{
    if(email == "admin@me.com" && password == "123"){
      // console.log("This is admin")
      setUser("admin");
      localStorage.setItem("loggedUser", JSON.stringify({role:'admin'}))
    }
    else if(authData){ // correction was you dont add the curly braces!!
      const employee = authData.employees.find((e)=> email === e.email && password === e.password);
      if(employee){
        setUser("employee");
        setLoggedInUser(employee);
        localStorage.setItem("loggedUser", JSON.stringify({role:'employee', data:employee}))
      }
      //console.log("User confirmed")
    }
  }

  //handleLogin("admin@me.com",123)
  // const data = useContext(AuthContext)
  // console.log(data)
  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} />: " "}
      {user == 'admin'? <AdminDashboard/>: <EmployeeDashboard data={loggedInUser}/>}
    </div>
  )
}

export default App;