import React,{useState, useEffect} from 'react'

const Header = ({userData}) => {
  console.log(localStorage)
  const logOutUser = () =>{
    localStorage.setItem("loggedUser", '')
    window.location.reload()
  }

  return (
    <div className='flex items-center px-8 text-3xl py-4 '>
        <h1>Hello<br/><span className='font-semibold text-4xl'>{userData.name}👋</span></h1>
        <button onClick={logOutUser} className='rounded-full bg-red-700 text-xl text-white px-2 py-2 ml-auto'>Log out</button> {/* for making the button float right we use ml-auto*/}
    </div>
  )
}

export default Header;