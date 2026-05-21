import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between py-4 px-7 bg-blue-900'>
        <h1 className='font-bold text-2xl'>Rahul</h1>
        <div className='flex gap-4 '>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/product'>Product</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
