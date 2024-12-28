import React,{useState, useEffect} from 'react'

const login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault()
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-cyan-300 p-20'>
        <h1 className='flex items-center justify-center mb-10 text-5xl'>LogIn page</h1>
            <form 
            onSubmit={submitHandler}
            className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                   setEmail(e.target.value)
                }}
                required 
                className="text-white outline-none rounded-full bg-transparent border-2 bg-red-100 px-3 py-1" type='email' placeholder='Enter your email...'
                />
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className="text-white outline-none rounded-full bg-transparent border-2 bg-red-100 px-3 py-1 mt-4" type='password' placeholder='Enter your password...'/>
                <button className="bg-white text-black outline-none rounded-full bg-cyan-300 border-2 bg-red-00 px-20 py-1 mt-10">Log in</button>
            </form>
        </div>
    </div>
  )
}

export default login