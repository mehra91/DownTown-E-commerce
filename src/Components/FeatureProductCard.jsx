import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsArrowRepeat } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const FeatureProductCard = ({price,image,name,desc,subCategory,}) => {
    const navigate=useNavigate();
    return (
        <div onClick={()=>navigate("/details")}
         className="h-75 w-50 flex flex-col   items-start   overflow-hidden   shadow hover:shadow-xl cursor-pointer relative group origin-top hover:scale-98 transition-all duration-200">


            <div className="relative h-65  overflow-hidden">
                <img
                    src= {image}
                    alt=""
                    className="h-full w-xs object-cover    transition-transform duration-500 group-hover:scale-108"
                />


                <div
                    className=" absolute bottom-0 left-0 w-full h-8
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


            <h4 className="capitalize text-base pl-2 font-medium ">
                 {name}
            </h4>
            <span className="pl-2  font-normal line-clamp-1 mb-1 ">
               {
                    desc
            }
            </span>
            <span className="pl-2  font-bold text-red-500 pb-2">
                ${price}
            </span>

        </div>
    )
}

export default FeatureProductCard
