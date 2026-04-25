import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' px-4 py-8 items-center bg-red-900 flex justify-between'>
      <h2 className='text-xl font-black'>Pranshu</h2>
      <div className='flex gap-8'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product' >Product</Link>
        <Link to='/courses' >Courses</Link>

      </div>
    </div>
  )
}

export default Navbar
