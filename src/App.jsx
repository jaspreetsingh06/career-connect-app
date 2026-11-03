import React from 'react'
import Navbar from './components/Navbar'
import JobDetails from './pages/JobDetails'
import { Route, Routes } from 'react-router-dom'


import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Login from './pages/Login'
import SignUp from './pages/SignUp'


const App = () => {
 

  return (
    
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/jobs/:id' element={<JobDetails />} />
      </Routes>
      
    </div>
  )
}

export default App