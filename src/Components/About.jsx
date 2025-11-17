import React from 'react'

const About = () => {
  return (
    <div className='h-90 w-auto   px-8 ml-4  mb-5 mt-5 flex items-center justify-between'> 
           
                 <img src="https://downtown.nop-station.com/images/uploaded/0002683_transcend-federal-extra-long-slim-straight-jean.png" alt="" className=' h-90 w-md object-contain' />
           
             <div className='  h-80 w-1/2 px-3 py-3  '>
                <h3 className='font-medium text-lg'>
                    About us
                </h3>
                <p className='text-sm leading-relaxed py-4' >
                    Online shopping is the process by which consumers browse, select, and purchase products or services over the internet. It offers convenience, accessibility, and a wide range of choices, allowing users to shop from the comfort of their homes at any time. With the growth of e-commerce platforms, online shopping has become an essential part of modern retail. Customers can view product details, compare prices, read reviews, and make secure payments online. Merchants can manage product listings, inventory, and orders through an admin site, where they can also update or edit content to ensure a smooth and personalized shopping experience.
                </p>
                <button className='text-red-400 font-semibold border border-red-400 py-1 px-2 flex items-center justify-center text-xs hover:bg-red-400 hover:text-white cursor-pointer' >
                    Read more
                </button>
             </div>
    </div>
  )
}

export default About