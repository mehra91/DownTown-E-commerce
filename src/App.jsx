import React from 'react'
import Navbar from './Components/Navbar'
import Carsoul from './Components/Carsoul'
import CategoryCard from './Components/CategoryCard'

const App = () => {
  return (
    <>
      <Navbar />
      <Carsoul />
      <div className='h-10 w-5xl   mt-4 ml-4 flex items-center pl-5  '>
        <h1 className='bg-linear-to-r from-red-400 via-red-600 to-slate-900  font-medium  bg-clip-text text-2xl text-transparent flex items-center justify-center '>
          Shop by Category
        </h1>
      </div>
      <div className='  w-full h-auto mt-2  flex items-center justify-evenly p-10 mb-20 gap-5   flex-wrap'>
        
      <CategoryCard />
      <CategoryCard/>
       
   </div>
    </>
  )
}

export default App