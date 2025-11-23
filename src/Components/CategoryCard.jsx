import React from 'react'
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({category,price,image,title}) => {
  const navigate = useNavigate();
  return (
  
    <div  onClick={()=>{
      navigate("/Category");
    }}
     className='  h-60 w-55 flex items-center justify-center rounded overflow-hidden cursor-pointer group  relative ' >
        <img src={image} alt="" className='h-60 w-55 rounded object-contain' />
         <div className="
    absolute bottom-0 left-0 w-full h-full flex flex-col items-center    text-white
    bg-linear-to-t form-gray-900 via-black to-black rounded-3xl
    translate-y-50
    group-hover:translate-y-42
    transition-all duration-500 ease-in-out
    
    ">
        <h1 className='text-lg font-semibold   flex items-center justify-center mb-3    '>
            {category}
        </h1>
        <h3 className='text-xl   flex items-center text-red-600 font-semibold justify-center mb-1  ' >
           $ {price}
        </h3>
          <h3 className='text-sm font-normal flex items-center justify-center mb-1  ' >
           {title}
        </h3>
        <h3 className='text-sm font-normal flex items-center justify-center mb-1  ' >
           {category}
        </h3>

  </div>
    </div>

 

  )
}

export default CategoryCard;