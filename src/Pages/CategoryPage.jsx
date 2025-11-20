import React from 'react'
import Navbar from '../Components/Navbar'
import FilterCard from '../Components/FilterCard'

const CategoryPage = () => {
    return (
        <>
             
                <Navbar />
 
            <div className='h-30 w-auto '>

            </div>
            <div className='  h-auto  w-full flex items-center bg-gray-600   '>
                <div className='bg-white h-full flex items-center justify-center   pt-4 w-4/12'>
                    <div className='h-full   border-2   w-10/12  leading-tight   p-2 '>
                        <FilterCard/>
                         
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