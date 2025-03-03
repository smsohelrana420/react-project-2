import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'

const App = () => {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App