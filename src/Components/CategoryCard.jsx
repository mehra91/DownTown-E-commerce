import React from 'react'
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({category,tags,thumbnail}) => {
  const navigate = useNavigate();
  return (
  
    <div  onClick={()=>{
      navigate("/Category");
    }}
     className='  h-60 w-55 flex items-center justify-center rounded overflow-hidden cursor-pointer group  relative ' >
        <img src={thumbnail} alt="" className='h-60 w-55 rounded object-cover' />
         <div className="
    absolute bottom-0 left-0 w-full h-full flex flex-col items-center    text-white
    bg-linear-to-t form-black/80 via-black/30 to-black/30  
    translate-y-50
    group-hover:translate-y-40
    transition-all duration-500 ease-in-out
    
    ">
        <h1 className='text-lg font-semibold   flex items-center justify-center mb-3    '>
            {tags[0]}
        </h1>
        <h3 className='text-sm font-normal flex items-center justify-center mb-1 z-1  ' >
            {tags[1]}
        </h3>
        <h3 className='text-sm font-normal flex items-center justify-center mb-1 z-1  ' >
            {tags[2]}
        </h3>
        <h3 className='text-sm font-normal flex items-center justify-center mb-1 z-1  ' >
            {tags[3]}
        </h3>

  </div>
    </div>

 

  )
}

export default CategoryCard;