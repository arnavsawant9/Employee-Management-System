// import React,{useState, useEffect} from 'react'

// const login = ({handleLogin}) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('')

//     const submitHandler = (e) =>{
//         e.preventDefault()
//         handleLogin(email, password);
//         setEmail("")
//         setPassword("")
//     }

//   return (
//     <div className='flex h-screen w-screen items-center justify-center'>
//         <div className='border-2 rounded-xl border-cyan-300 p-20'>
//         <h1 className='flex items-center justify-center mb-10 text-5xl'>LogIn page</h1>
//             <form 
//             onSubmit={submitHandler}
//             className='flex flex-col items-center justify-center'>
//                 <input
//                 value={email}
//                 onChange={(e)=>{
//                    setEmail(e.target.value)
//                 }}
//                 required 
//                 className="text-white outline-none rounded-full bg-transparent border-2 bg-red-100 px-3 py-1" type='email' placeholder='Enter your email...'
//                 />
//                 <input 
//                 value={password}
//                 onChange={(e)=>{
//                     setPassword(e.target.value)
//                 }}
//                 required 
//                 className="text-white outline-none rounded-full bg-transparent border-2 bg-red-100 px-3 py-1 mt-4" type='password' placeholder='Enter your password...'/>
//                 <button className="bg-white text-black outline-none rounded-full bg-cyan-300 border-2 bg-red-00 px-20 py-1 mt-10">Log in</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default login










import React, { useState } from 'react'
import {auth, googleProvider} from "../../firebase"
import { signInWithPopup } from 'firebase/auth';

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail("");
        setPassword("");
    }

    const signInWithGoogle = async()=>{
        try{
          await signInWithPopup(auth,googleProvider);
          console.log("successs!!");
        } catch(error){
          console.log(error)
        }
      }

      return (
        <div className="flex h-screen w-screen bg-gradient-to-r from-blue-500 to-indigo-500 items-center justify-center">
            <div className="bg-white p-12 rounded-xl shadow-lg max-w-sm w-full">
                <h1 className="text-4xl font-semibold text-center text-gray-700 mb-8">Log In</h1>
                <form onSubmit={submitHandler} className="space-y-6">
                    <div>
                        <input
                            type="email"
                            placeholder="Enter your email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="text-black w-full p-4 text-lg rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Enter your password..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="text-black w-full p-4 text-lg rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full py-3 text-lg font-semibold text-white bg-cyan-500 rounded-xl hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
                    >
                        Log In
                    </button>
                    <button 
                        onClick={signInWithGoogle} 
                        className="w-full py-3 mt-2 text-lg font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 flex items-center justify-center"
                    >
                        Log In with Google
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-500">
                        Don't have an account? <a href="#" className="text-cyan-500 hover:underline">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );    
}

export default Login;
