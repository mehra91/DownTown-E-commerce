import React from 'react'
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className='  text-white h-15 flex  justify-center-safe items-center w-5xl ml-6 mt-5 rounded-4xl  bg-black px-1.5 pt-0.5  pb-1.5 absolute '>
            <div className='flex items-center justify-between  bg-white text-black h-12 rounded-3xl  w-full   '>
                <div className=' flex items-center justify-center h-10 w-40 '>
                    <img src="http://downtown.nop-station.com/images/thumbs/0003932_0003133_Frame%205.png" alt="Logo" className='h-10 w-30 px-2 py-2 cursor-pointer' />
                </div>
                <div className='flex items-center justify-around    list-none  h-10  w-xs rounded-3xl bg-black text-white   '>
                    <li className='cursor-pointer flex items-center justify-center text-sm h-9 w-19 rounded-3xl hover:bg-white hover:text-black  '>
                      Men
                    </li>
                    <li className='cursor-pointer flex items-center justify-center text-sm h-9 w-19 rounded-3xl hover:bg-white hover:text-black  '>
                        Women
                    </li>
                    <li className='cursor-pointer flex items-center justify-center text-sm h-9 w-19 rounded-3xl hover:bg-white hover:text-black  '>
                        Kids
                    </li>
                    <li className='cursor-pointer flex items-center justify-center text-sm h-9 w-19 rounded-3xl hover:bg-white hover:text-black  '>
                        Clothing
                    </li>
                </div>
                <div className='   focus-within:ring-2 focus-within:ring-black transition-all  h-10 w-50 flex items-center justify-center rounded-3xl overflow-hidden'>
                    <input
                        type="text"
                        placeholder='Search Store...'
                        className='   h-full w-full flex items-center px-5   outline-none  '
                        
                     />
                     <IoSearch className='text-2xl  h-8 w-8 p-1 rounded-sm absolute right-10 cursor-pointer  ' />
                </div>
            </div>
        </div>
    )
}

export default Navbar