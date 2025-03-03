import { RiCloseLine, RiMenu2Line } from '@remixicon/react'
import React, { useState } from 'react'

const Navbar = () => {
  let [menu,openMenu]=useState(false)
  let [showMenu,setShowmenu]=useState(true)
  return (
    <nav className='flex flex-wrap justify-between md:items-center px-10 pt-6 md:px-20 text-white'>
        <span className='text-xl font-bold tracking-wide'>Portfolio</span>
        <ul className={`${menu ? "block":"hidden"} mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
            <a href="#About">
            <li className='text-md transition-all duration-300 p-1 md:p-0'>About</li>
            </a>
            <a href="#Experience">
            <li className='text-md transition-all duration-300 p-1 md:p-0'>Experience</li>
            </a>
           <a href="#Projects">
           <li className='text-md transition-all duration-300 p-1 md:p-0'>Projects</li>
           </a>
          <a href="#Contact">
          <li className='text-md transition-all duration-300 p-1 md:p-0'>Contact</li>
          </a>
        </ul>
        {showMenu ? (
          <RiMenu2Line size={30} className='md:hidden right-10 absolute top-6 duration-300 transition-all' onClick={()=>{
            openMenu(!menu);setShowmenu(!showMenu);
          }}/>
        ):(<RiCloseLine size={30} className='md:hidden right-10 absolute top-6 duration-300 transition-all'/>)}
    </nav>
  )
}

export default Navbar