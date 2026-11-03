import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/jobs', label: 'Jobs' },
    { to: '/login', label: 'Login' },
    { to: '/signup', label: 'Sign Up' },
  ]

  return (
    <div className='sticky top-0 z-50 bg-[#020617] text-white'>
      <div className='flex justify-between items-center px-4 md:px-20 py-4 md:py-6'>
        <h1 className='font-bold text-xl md:text-2xl'>CareerConnect</h1>

        {/* Mobile button */}
        <button
          className='md:hidden text-2xl cursor-pointer'
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>

        {/* Laptop links */}
        <div className='hidden md:flex gap-8 font-semibold text-lg'>
          {links.map((link) => (
            <Link key={link.to} className='hover:text-[#22C55E]' to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className='md:hidden flex flex-col gap-4 px-4 pb-4 font-semibold'>
          {links.map((link) => (
            <Link
              key={link.to}
              className='hover:text-[#22C55E]'
              to={link.to}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar