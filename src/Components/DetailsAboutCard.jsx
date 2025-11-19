import React, { useState } from 'react'
import BigFeatureProductCard from './BigFeatureCard'
 
const DetailsAboutCard = () => {
    const [activeTab, setActiveTab] = useState("description")
    return (
        <div className=' mt-4 m-5 h-screen w-auto p-2   flex items-center justify-start gap-x-2  '>
            <div className='  m-2 h-full w-8/12 p-2 shadow-2xl rounded-2xl'>
                <div className='  rounded-lg h-auto   flex   justify-start gap-x-5 p-3 '>
                    <section onClick={() => {
                        setActiveTab("description")
                    }}

                        className={`  p-2 w-auto   cursor-pointer text-xl font-semibold    h-10 flex items-center justify-center rounded  ${activeTab === "description" ? "text-black" : "text-gray-400"} `}>
                        Description
                    </section>

                    <section onClick={() => {
                        setActiveTab("review")
                    }}
                        className={`  p-2 w-auto   cursor-pointer text-xl font-semibold       h-10 flex items-center justify-center rounded  ${activeTab === "review" ? "text-black" : "text-gray-400"} `}>
                        Reviews
                    </section>

                </div>
                <div className='h-auto w-full   rounded mt-2'>
                    {activeTab === "description" && (
                        <div className='p-3'>
                            <h2 className="font-semibold text-lg mb-3 ">Product Overview</h2>
                            <p className="text-gray-600 leading-7 px-3 ">
                                Step into effortless style with our Women’s Denim collection 👖💃.
                                Designed for the modern woman, each pair blends flattering fits
                                with all-day comfort. Whether you're dressing up or keeping it
                                casual, these jeans have your back – versatile, durable, and
                                oh-so-stylish. Your new favorite pair is waiting!
                            </p>
                        </div>
                    )}
                    {activeTab === "review" && (
                        <div className='p-3'>
                            <h2 className="font-semibold text-lg mb-3">Customer Reviews</h2>
                            <p className="text-gray-600 px-3">No reviews yet. Be the first!</p>
                        </div>
                    )}
                </div>
            </div>



            <div className='h-full w-auto shadow  rounded-2xl  '>
                 <BigFeatureProductCard  />
            </div>

        </div>
    )
}

export default DetailsAboutCard;
