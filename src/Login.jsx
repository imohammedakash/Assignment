import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'
const Login = () => {
  const [credentials, setCredentials] = useState({  username: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const Navigate = useNavigate()
 const SEC_Token = "ksdji39048sjx&kks*(&akljd^&fkls%&*jdvisu^&tjgg23*85623947%^$&*&*hjkhsf&jkdsf"
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.username === "foo" && credentials.password === "bar") { 
      localStorage.setItem("MohammedAkashToken", SEC_Token)
      Navigate("/home")
    }
    else {
      alert("please enter a valid username and password")
    }
    
  }
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className='h-screen w-full'>
      <div className='grid place-items-center h-full w-full'>

        <form className='sm:w-[450px] w-full px-8 pt-6 pb-8 flex items-center justify-center flex-col gap-5 border rounded-lg shadow-xl' onSubmit={handleSubmit} >

          <h1 className="text-3xl p-3 m-0 text-gray-600">Login</h1>

          <input type="text" required placeholder='Enter your username' className='bg-transparent outline-none border text-sm p-3 rounded-lg text-gray-700 w-full ' name='username' value={credentials.username} onChange={onchange} />

          <div className="border rounded-lg w-full flex items-center justify-center pr-2">

            <input type={showPassword ? 'text' : 'password'} required autoComplete="off" placeholder='Enter a secure password' className='bg-transparent outline-none  text-sm text-gray-700 w-full p-3 ' name='password' value={credentials.password} onChange={onchange} />

            {showPassword ? <AiFillEyeInvisible onClick={() => { setShowPassword(false) }} className='cursor-pointer text-lg text-gray-700' /> : <AiFillEye onClick={() => { setShowPassword(true) }} className='cursor-pointer text-lg text-gray-700' />}

          </div>

          <button className='bg-blue-400 px-6 py-2 rounded text-white sm:w-[50%] w-[80%] '>Login</button>

          <div className="w-full flex items-center justify-end gap-1">

            <span className='text-xs text-gray-600'>Already have an account?</span>

            <Link to="/register" className='text-blue-600 text-sm'>register</Link>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Login