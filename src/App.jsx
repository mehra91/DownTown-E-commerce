import React from 'react'
import Navbar from './Components/Navbar'
import Carsoul from './Components/Carsoul'

const App = () => {
  return (
    <>
      <Navbar />
      <Carsoul />
      <div className='h-10 w-5xl   mt-4 ml-4 flex items-center pl-5  '>
        <h1 className='  text-xl bg-gradient-to-r bg-orange-600 to-bg-black font-semibold flex items-center justify-center '>
          Shop by Category
        </h1>
      </div>  
    </>
  )
}

export default App