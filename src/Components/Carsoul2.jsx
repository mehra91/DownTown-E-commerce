import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi";

const Carsoul2 = () => {
  return (
    <div className='h-90 w-auto my-5 relative group   '>
        <img src="http://downtown.nop-station.com/images/thumbs/0003371_456456445.webp" alt="img1" className='h-90 w-full object-cover ' />
            <div className='absolute cursor-pointer top-60 left-70 h-5 w-5 flex items-center justify-center rounded-full bg-linear-to-r from-red-500 via-red-600 to-red-500 animate-ping '>
                
        <HiOutlineShoppingBag className=' text-white h-3 w-3 ' />  
            </div>
             <div className='absolute cursor-pointer top-60 right-80 h-5 w-5 flex items-center justify-center rounded-full bg-linear-to-r from-red-500 via-red-600 to-red-500 animate-ping '>
                
        <HiOutlineShoppingBag className=' text-white h-3 w-3 ' />  
            </div>
    </div>
  )
}

export default Carsoul2