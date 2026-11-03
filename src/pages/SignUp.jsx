import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if(name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPass.trim() === ''){
      setError("All fields are required");
      return;
    }

    if(password.length < 6){
      setError("Password must be at least 6 characters");
      return;
    } 

    if(password !== confirmPass){
      setError("Passwords do not match");
      return;
    }

    setError('')
    console.log({name, email, password })

    setName('')
    setEmail('')
    setPassword('')
    setConfirmPass('')
  }


  return (
    <div  className='flex justify-center items-center py-10 min-h-[calc(100vh-80px)]'>
      <div className='flex flex-col gap-4 bg-white shadow-2xl px-5 w-[90%] max-w-md  py-6 justify-center rounded-3xl ' >

        <h2 className='font-bold mb-5 text-center text-2xl'>Sign Up</h2>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4' >
          <input value={name} onChange={(e) => setName(e.target.value)} className='border-2 py-3 pl-5 rounded-xl border-gray-600 outline-0' type="text" placeholder='Name' />
          <input value={email} onChange={(e) => setEmail(e.target.value)} className='border-2 py-3 pl-5 rounded-xl border-gray-600 outline-0' type="email" placeholder='Email' />
          <input value={password} onChange={(e) => setPassword(e.target.value)} className='border-2 py-3 pl-5 rounded-xl border-gray-600 outline-0' type="password" placeholder='Password' />
          <input value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} className='border-2 py-3 pl-5 rounded-xl border-gray-600 outline-0' type="password" placeholder='Confirm Password' />
          {error && <p className='text-red-500 text-sm'>{error}</p>}
          <button type='submit' className='bg-[#020617] text-white rounded-lg font-semibold py-3 hover:scale-105 transform' >Create Account</button>
        </form>
        
        <h3 className='text-sm text-center mt-3'>Already have an account? <Link className='text-blue-600' to={'/login'}>Login</Link></h3>
      </div>
    </div>
  )
}

export default SignUp