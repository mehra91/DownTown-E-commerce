import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsArrowRepeat } from "react-icons/bs";
  

const BigFeatureProductCard = () => {
    
    return (
        <div  
         className="h-auto w-xs  rounded-2xl shadow     flex flex-col   items-start   overflow-hidden      cursor-pointer relative group origin-top hover:scale-100 transition-all duration-200">


            <div className="relative h-auto w-xs  overflow-hidden rounded ">
                <img
                    src="http://downtown.nop-station.com/images/thumbs/0003378_anessa-31-wide-leg-jean_700.webp"
                    alt=""
                    className="h-auto w-xs object-cover overflow-hidden  transition-transform duration-500 group-hover:scale-108"
                />


                <div
                    className=" absolute bottom-0 left-0 w-full h-10
                                bg-linear-to-t from-red-500 to-red-300
                                translate-y-full group-hover:translate-y-0
                                transition-all duration-500 ease-in-out
                                flex items-center justify-around text-white font-semibold capitalize 
                                "
                >
                    <HiOutlineShoppingBag />
                    Add To Cart
                    <BsArrowRepeat />
                </div>
            </div>


            <h4 className="capitalize text-base p-2 font-medium">
                Aneesa 31 wide Leg jean
            </h4>

            <span className="pl-2 pb-2 font-bold text-red-500">
                $325.00
            </span>

        </div>
    )
}

export default BigFeatureProductCard
