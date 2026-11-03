import React, { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e){
    e.preventDefault();

    if(email.trim() === '' || password.trim() === ''){
      setError("All fields are required")
      return
    }

    if(password.length < 6){
      setError("Password must be at least 6 characters")
      return
    }

    setError('')
    console.log({email, password})

    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex justify-center items-center py-10 min-h-[calc(100vh-80px)]'>
      <div className='flex flex-col gap-4 bg-white shadow-2xl px-5 w-[90%] max-w-md py-6 justify-center rounded-3xl '>
        <h2 className='font-bold mb-10 text-center text-2xl'>Login to your account</h2>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit} >
          <input value={email} onChange={(e) => setEmail(e.target.value)} className='border-2 py-3 pl-5 rounded-xl border-gray-600 outline-0' type="email" placeholder='Email Id' />
          <input value={password} onChange={(e) => setPassword(e.target.value)} className='border-2 py-3 pl-5 rounded-xl border-gray-600 outline-0' type="password" placeholder='Password' />
          {error && <p className='text-red-500 text-sm'>{error}</p>}
          <button className='bg-[#020617] text-white rounded-lg font-semibold py-3 hover:scale-105 transform'>Login</button>
        </form>

        <a className='text-center ' href="">Forgot Password?</a>
        <h3 className='text-sm text-center '>Don't have an account?  <Link className='text-blue-600' to={'/signUp'}>Sign Up</Link></h3>
      </div>
    </div>
  )
}

export default Login