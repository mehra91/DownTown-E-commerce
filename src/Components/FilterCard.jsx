import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";

const FilterCard = () => {
    const [plus, setPlus] = useState()
    return (
        <div className=' bg-white h-auto w-full border   flex flex-col px-3 py-2   '>
            <div className='h-8 w-full   flex items-center justify-center  '>
                <div className='  h-8 w-full text-base  font-medium flex items-center justify-start px-1'>
                    Filters
                </div>
                <div className=' h-8 w-full flex items-center justify-end px-1 cursor-pointer '>
                    <GoPlus className='text-lg font-black ' />
                </div>
            </div>
           <div className='border-3'>
                 <div className=' h-full w-full font-medium capitalize px-2 '>
                size
                <div className='h-auto  flex items-center justify-start gap-x-2 px-2 py-1 '>
                    <div className='border h-4 w-4 cursor-pointer '>

                    </div>
                    <h4 className='text-sm font-normal cursor-pointer'>
                        Large
                    </h4>
                </div>
                <div className='h-auto  flex items-center justify-start gap-x-2 px-2 py-1 '>
                    <div className='border h-4 w-4 cursor-pointer '>

                    </div>
                    <h4 className='text-sm font-normal cursor-pointer'>
                       Medium
                    </h4>
                </div>
                <div className='h-auto  flex items-center justify-start gap-x-2 px-2 py-1 '>
                    <div className='border h-4 w-4 cursor-pointer '>

                    </div>
                    <h4 className='text-sm font-normal cursor-pointer'>
                       Small
                    </h4>
                </div>
            </div>
             <div className='  h-full w-full font-medium capitalize px-2'>
                color
                <div className='h-auto  flex items-center justify-start gap-x-2 px-2 py-1 '>
                    <div className='border border-b-2 border-r-gray-500 border-r-2 border-b-gray-500  h-5 w-5 cursor-pointer bg-gray-700 '>

                    </div>
                    <h4 className='text-sm font-normal cursor-pointer'>
                        gray
                    </h4>
                </div>
                <div className='h-auto  flex items-center justify-start gap-x-2 px-2 py-1 '>
                    <div className='border border-b-2 border-r-gray-500 border-r-2 border-b-gray-500 h-5 w-5 cursor-pointer bg-red-700 '>

                    </div>
                    <h4 className='text-sm font-normal cursor-pointer'>
                       Red
                    </h4>
                </div>
                <div className='h-auto  flex items-center justify-start gap-x-2 px-2 py-1 '>
                    <div className='border border-b-2 border-r-gray-500 border-r-2  border-b-gray-500  h-5 w-5 cursor-pointer bg-blue-700 '>

                    </div>
                    <h4 className='text-sm font-normal cursor-pointer'>
                       Blue
                    </h4>
                </div>
            </div>
           </div>
        </div>
    )
}

export default FilterCard;