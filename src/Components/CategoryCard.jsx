import React from 'react'
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({category,subCategory,image   }) => {
  const navigate = useNavigate();
  return (
  
    <div  onClick={()=>{
      navigate("/Category");
    }}
     className='  h-60 w-55 flex items-center justify-center rounded overflow-hidden cursor-pointer group  relative ' >
        <img src={image} alt="" className='h-60 w-55 rounded object-contain' />
         <div className="
    absolute bottom-0 left-0 w-full h-full flex flex-col items-center    text-white
    bg-linear-to-t form-gray-500 via-black to-transparent rounded 
    translate-y-50
    group-hover:translate-y-35
    transition-all duration-500 ease-in-out
    
    ">
        <h1 className='text-lg font-semibold   flex items-center justify-center text-black mb-3  hover:text-white   '>
            {category}
        </h1>
        <h3 className='text-base   flex items-center   font-normal justify-center text-white mb-1 hover:text-white   ' >
           {subCategory}
        </h3>
          <h3 className='text-sm font-normal flex items-center justify-center text-white mb-1  ' >
           {/* {date} */}
        </h3>
        <h3 className='text-sm font-normal flex items-center justify-center text-white mb-1  ' >
           {/* {category} */}
        </h3>

  </div>
    </div>

 

  )
}

export default CategoryCard;