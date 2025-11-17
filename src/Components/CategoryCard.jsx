import React from 'react'

const CategoryCard = () => {
  return (
  
    <div className='  h-60 w-55 flex items-center justify-center rounded overflow-hidden cursor-pointer group  relative ' >
        <img src="http://downtown.nop-station.com/images/thumbs/0003269_men_460.webp" alt="" className='h-60 w-55 rounded object-cover' />
         <div className="
    absolute bottom-0 left-0 w-full h-full flex flex-col items-center    text-white
    bg-linear-to-t form-black/80 via-black/30 to-black/30  
    translate-y-50
    group-hover:translate-y-30
    transition-all duration-500 ease-in-out
    
    ">
        <h1 className='text-lg font-semibold   flex items-center justify-center mb-3    '>
            Men
        </h1>
        <h3 className='text-sm font-normal flex items-center justify-center mb-1 z-1  ' >
            Bottoms
        </h3>
        <h3 className='text-sm font-normal flex items-center justify-center mb-1 z-1  ' >
            Clothing
        </h3>
        <h3 className='text-sm font-normal flex items-center justify-center mb-1 z-1  ' >
            Shoes & Accessories
        </h3>

  </div>
    </div>

 

  )
}

export default CategoryCard;