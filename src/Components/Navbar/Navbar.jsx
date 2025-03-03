import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-wrap justify-between md:items-center px-10 pt-6 md:px-20 text-white'>
        <span className='text-xl font-bold tracking-wide'>Portfolio</span>
        <ul>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar