import React from 'react'
import { MdStarBorder } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
const DetailSection = () => {
  return (
    <div className='   flex items-center justify-center pt-25 h-auto w-auto'>
      <div className='h-auto w-5xl    flex items-evenly p-3 '>
        <div className='   h-auto   w-7/12 flex items-center justify-evenly gap-x-2 gap-y-3 p-2 flex-wrap overflow-hidden'>
          <img src="http://downtown.nop-station.com/images/thumbs/0003378_anessa-31-wide-leg-jean_800.webp" alt="" className='h-70 w-65 object-cover flex items-center justify-center ' />
          <img src="http://downtown.nop-station.com/images/thumbs/0003379_anessa-31-wide-leg-jean_800.webp" alt="" className='h-70 w-65 object-cover flex items-center justify-center' />
          <img src="http://downtown.nop-station.com/images/thumbs/0003380_anessa-31-wide-leg-jean_800.webp" alt="" className='h-70 w-65 object-cover flex items-center justify-center' />
          <img src="http://downtown.nop-station.com/images/thumbs/0003381_anessa-31-wide-leg-jean_800.webp  " alt="" className='h-70 w-65 object-cover flex items-center justify-center' />

        </div>
        <div className='  h-auto  w-5/12 bg-slate-500 flex flex-col items-center p-4  '>
          <h2 className='text-xl flex items-center  h-auto w-full pl-2 font-semibold'>
            Anessa 31 Wide Leg Jean
          </h2>
          <p className='text-base/tight  p-4 opacity-80  '>
            Elevate your everyday style with our Women’s Denim – where comfort meets confidence 👖✨. Perfect fit, timeless look, and made to move with you.
          </p>
          <p className='flex cursor-pointer opacity-70' >
            <MdStarBorder className='text-xl' />
            <MdStarBorder className='text-xl' />
            <MdStarBorder className='text-xl' />
            <MdStarBorder className='text-xl' />
            <MdStarBorder className='text-xl' />
          </p>
          <div className='h-auto  w-full'>
            <h3 className='  h-auto w-full  font-semibold capitalize p-1'>
              size
            </h3>
            <div className='h-auto w-full p-2 flex items-center justify-start gap-x-2'>
              <div className='h-10 w-10 border  border-b-2 border-black/50 border-r-2 flex items-center justify-center cursor-pointer font-semibold text-black/70'>
                S
              </div>
              <div className='h-10 w-10 border  border-b-2 border-black/50 border-r-2 flex items-center justify-center cursor-pointer font-semibold text-black/70'>
                M
              </div>
              <div className='h-10 w-10 border  border-b-2 border-black/50 border-r-2 flex items-center justify-center cursor-pointer font-semibold text-black/70'>
                L
              </div>
            </div>
          </div>
          <div className='h-auto  w-full'>
            <h3 className='  h-auto w-full  font-semibold capitalize p-1'>
              color
            </h3>
            <div className='h-auto w-full p-2 flex items-center justify-start gap-x-2'>
              <div className='h-10 w-10 border  border-b-2 border-black/50 border-r-2 flex items-center justify-center cursor-pointer font-semibold text-black/70 bg-stone-500'>

              </div>
              <div className='h-10 w-10 border  border-b-2 border-black/50 border-r-2 flex items-center justify-center cursor-pointer font-semibold text-black/70 bg-black'>

              </div>
              <div className='h-10 w-10 border  border-b-2 border-black/50 border-r-2 flex items-center justify-center cursor-pointer font-semibold text-black/70 bg-indigo-300'>

              </div>
            </div>
          </div>

          <div className='flex items-center justify-start h-auto w-full p-2 mt-2 gap-x-5'>
            <span className='text-red-700  text-2xl font-medium '>
                $259.00
            </span>
            <span className='text-xl opacity-70 line-through '>
                $220.00
            </span>
          </div>
          
          <div className='h-auto w-full  flex items-center justify-evenly mt-2   '>
            <div className='h-12 w-18  flex items-center justify-start border '>
              <div className=' flex items-center justify-center border-r h-full w-1/2'>
                 1
              </div>
              <div className='  flex items-center justify-evenly flex-col h-full w-1/2'>
                 <section className=' h-1/2 w-full flex  items-center justify-center text-lg cursor-pointer'>
                    +
                 </section>
                 <section className='border-t h-1/2 w-full cursor-pointer flex items-center justify-center text-xl'>
                    -
                 </section>
              </div>
            </div>
            <div className='h-12 w-35 cursor-pointer flex items-center justify-center text-lg  text-rose-50 bg-red-500'>
              Add to cart
            </div>
            <div className='border h-12 w-12 cursor-pointer  flex items-center justify-center'>
               <FaRegHeart className='text-2xl ' />

            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default DetailSection