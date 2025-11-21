import React from 'react'
import Navbar from '../Components/Navbar'
import FilterCard from '../Components/FilterCard'

const CategoryPage = () => {
    return (
        <>
             
                <Navbar />
 
            <div className='h-30 w-auto '>

            </div>
            <div className='  h-auto  w-full flex     '>
                <div className='bg-white h-full flex items-center justify-center   pt-4 w-4/12'>
                    <div className='h-full w-10/12  leading-tight transition-all duration-500 translate-y-0 rounded border-gray-800 shadow-2xl shadow-gray-600  p-2 '>
                        <FilterCard/>
                         <FilterCard/> <FilterCard/>
                    </div>
                </div>
                <div className='bg-zinc-400 h-80 w-8/12'>
                    total part
                </div>
            </div>
        </>
    )
}

export default CategoryPage