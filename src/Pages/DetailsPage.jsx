import React from 'react'
import Navbar from '../Components/Navbar'
import DetailSection from '../Components/DetailSection'
import DetailsAboutCard from '../Components/DetailsAboutCard'
import BigFeatureProductCard from '../Components/BigFeatureCard'
import Footer from '../Components/Footer'

const DetailsPage = () => {
  return (
    <>
      <div className='relative z-10 '>
        <Navbar />
      </div>

      <DetailSection />
      <DetailsAboutCard />
      <div className='h-10 w-4xl     mt-4 ml-10 flex items-center justify-start   '>
        <h1 className='uppercase bg-linear-to-r from-red-400 via-red-600 to-slate-900  font-medium  bg-clip-text text-2xl text-transparent flex items-center justify-center '>
          Customers who bought this item also bought
        </h1>
      </div>
      <div className='flex items-center justify-evenly p-5 '>
        <BigFeatureProductCard  />
        <BigFeatureProductCard  />
        <BigFeatureProductCard  />
      </div>
       <Footer/>

    </>
  )
}

export default DetailsPage