import React from 'react'
import Navbar from '../Components/Navbar'
import DetailSection from '../Components/DetailSection'
import DetailsAboutCard from '../Components/DetailsAboutCard'

const DetailsPage = () => {
  return (
      <>
            <div className='relative z-10 '>
                <Navbar />
            </div>
             
               <DetailSection/>
               <DetailsAboutCard/>
            
        </>
  )
}

export default DetailsPage