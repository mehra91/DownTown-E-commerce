import React from 'react'
import Navbar from './Components/Navbar'
import Carsoul from './Components/Carsoul'
import CategoryCard from './Components/CategoryCard'
import FeatureProductCard from './Components/FeatureProductCard'
import Carsoul2 from './Components/Carsoul2'
import About from './Components/About'

const App = () => {
  return (
    <>
      <Navbar />
      <Carsoul />
      <div className='h-10 w-5xl   mt-4 ml-4 flex items-center pl-5  '>
        <h1 className='uppercase bg-linear-to-r from-red-400 via-red-600 to-slate-900  font-medium  bg-clip-text text-2xl text-transparent flex items-center justify-center '>
          Shop by Category
        </h1>
      </div>
      <div className='  w-full h-auto    flex items-center justify-evenly  my-5 gap-5   flex-wrap'>

        <CategoryCard />
        <CategoryCard />

      </div>
      <div className='h-10 w-5xl mt-4 ml-4 flex items-center pl-5  '>
        <h1 className='uppercase bg-linear-to-r from-red-400 via-red-600 to-slate-900  font-medium  bg-clip-text text-2xl text-transparent flex items-center justify-center '>
          Feature Products
        </h1>
      </div>

      <div className='  h-75 w-full   flex items-center justify-evenly my-5    '>
        <FeatureProductCard />
         <FeatureProductCard />
      </div>
      <Carsoul2/>
     <About/>

    </>
  )
}

export default App