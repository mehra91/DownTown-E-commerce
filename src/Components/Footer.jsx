const Footer = () => {

    return (
        <>
            <div className="flex  h-auto w-auto p-2 mt-10 items-center  justify-evenly text-black    gap-x-3 px-20   bg-zinc-900">

                <div className="flex items-center tracking-tight leading-snug justify-center text-white border-white h-auto w-auto p-2 gap-x-3" >

                    <img src="http://downtown.nop-station.com/images/thumbs/0003777_0003021_1-546458%20(1).png" className="h-12 w-12 cursor-pointer  " alt="no img" />
                    <h1 className="text-xs font-medium" >Free shipping
                        <br />
                        Free Shipping for orders over $150
                    </h1>
                </div>
                <div className="flex items-center tracking-tight leading-snug justify-center   text-white border-white h-auto w-auto p-2 gap-x-3" >
                    <img src="http://downtown.nop-station.com/images/thumbs/0003778_0003022_1-546458%20(2).png" className="h-12 w-12 cursor-pointer" alt="no img" />
                    <h1 className="text-xs font-medium" >Money guarantee <br />
                        Within 30 days for an exchange</h1>
                </div>
                <div className="flex items-center tracking-tight leading-snug justify-center   text-white border-white h-auto w-auto p-2 gap-x-3" >
                    <img src="http://downtown.nop-station.com/images/thumbs/0003779_0003023_1-546458%20(3).png" className="h-12 w-12 cursor-pointer" alt="no img" />
                    <h1 className="text-xs font-medium" >Online support <br />
                        24 hours a day, 7 days a week</h1>
                </div>
                <div className="flex items-center tracking-tight leading-snug justify-center   text-white border-white h-auto w-auto p-2 gap-x-3" >
                    <img src="http://downtown.nop-station.com/images/thumbs/0003780_0003024_1-546458%20(4).png" className="h-12 w-12 cursor-pointer" alt="no img" />
                    <h1 className="text-xs font-medium" >Flexible payment <br />
                        Pay with Multiple Credit Cards</h1>
                </div>
            </div>
            <hr className="text-white " />


            <div className="flex  pt-5  h-auto w-auto  bg-zinc-900 justify-evenly  pb-5      text-white ">
                <div className="  h-auto w-50 flex items-center justify-center flex-col pt-5 p-2 ">
                    <img src="http://downtown.nop-station.com/images/thumbs/0003934_0003027_Frame%205.png" alt="" className="h-8 w-full p-1  object-contain " /><br />
                    <span className=" text-xs  h-auto w-full    ">© 2025 nopStation by Brain Station 23. All rights reserved.</span><br />
                    <span className="text-xs gap-y-1   h-auto w-full">Email : sales@nop-station.com <br />
                        Phone : +8801719304086</span>
                   
                        <img src="http://downtown.nop-station.com/images/thumbs/0003935_0003028_0003012_Card.webp" alt="err"  className="h-auto w-full    mt-3"/>

                    
                </div>

                   
                <div className="  flex items-center justify-evenly px-2 flex-col">
                    <h1 className="text-gray-400 flex items-center   h-auto w-full p-1 justify-start text-base">INFORMATION</h1>
                    <ul>
                        <li className="text-sm font-normal tracking-tight text-gray-300" ><a href="#">Site Map</a></li>
                        <li className="text-sm font-normal tracking-tight text-gray-300" ><a href="#">Shipping & Returns</a></li>
                        <li className="text-sm font-normal tracking-tight text-gray-300" ><a href="#">Privacy Notice</a></li>
                        <li className="text-sm font-normal tracking-tight text-gray-300" ><a href="#">Condition of Use</a></li>
                        <li className="text-sm font-normal tracking-tight text-gray-300" ><a href="#">Contact Us</a></li>
                        <li className="text-sm font-normal tracking-tight text-gray-300" ><a href="#">About Us</a></li>
                    </ul>
                </div>

                <div className=" flex items-center justify-evenly px-2 flex-col">
                    <h1 className="text-gray-400 flex items-center   h-auto w-full p-1 justify-start text-base">CUSTOMER SERVICE</h1>
                    <ul>
                        <li className="text-sm font-normal tracking-tight text-gray-300" ><a href="#">Search</a></li>
                        <li className="text-sm font-normal tracking-tight text-gray-300" ><a href="#">News</a></li>
                        <li className="text-sm font-normal tracking-tight text-gray-300" ><a href="#">Blog</a></li>
                        <li className="text-sm font-normal tracking-tight text-gray-300" ><a href="#">Recently Viewed Products</a></li>
                        <li className="text-sm font-normal tracking-tight text-gray-300" ><a href="#">Compare Products List</a></li>
                        <li className="text-sm font-normal tracking-tight text-gray-300" ><a href="#">New Products</a></li>
                    </ul>
                </div>

                <div className="  flex items-center justify-evenly px-2 flex-col">
                    <h1 className="text-gray-400 flex items-center  h-auto w-full p-1 justify-start  text-base" >MY ACCOUNT</h1>
                    <ul>
                        <li className="text-sm font-normal tracking-tight text-gray-300" ><a href="#">My account</a></li>
                        <li className="text-sm font-normal tracking-tight text-gray-300" ><a href="#">Orders</a></li>
                        <li className="text-sm font-normal tracking-tight text-gray-300" ><a href="#">Addresses</a></li>
                        <li className="text-sm font-normal tracking-tight text-gray-300" ><a href="#">Shopping Cart</a></li>
                        <li className="text-sm font-normal tracking-tight text-gray-300" ><a href="#">Wishlist</a></li>
                        <li className="text-sm font-normal tracking-tight text-gray-300" ><a href="#">Apply for Vendor Account</a></li>
                    </ul>
                </div>

            </div>




        </>
    )
}
export default Footer;