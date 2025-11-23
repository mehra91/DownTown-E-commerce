import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Carsoul from './Components/Carsoul'
import CategoryCard from './Components/CategoryCard'
import FeatureProductCard from './Components/FeatureProductCard'
import Carsoul2 from './Components/Carsoul2'
import About from './Components/About'
import Footer from './Components/Footer'

const App = () => {
  const [category , setCategory] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
         const seen = new Set();
         const uniqueCategories = data.filter(product=>{
          if(seen.has(product.category)){
            return false;
          }else{
            seen.add(product.category)
            return true;
          }
         });
         setCategory(uniqueCategories);
        
      } catch (error) {
        console.log("error is : ", error);
      }
    };
    getProducts();
  }, [])
  return (
    <>
      <div className='relative'>
        <Navbar />
      </div>
      <Carsoul />
      <div className='h-10 w-4xl     mt-4 ml-10 flex items-center justify-start   '>
        <h1 className='uppercase bg-linear-to-r from-red-400 via-red-600 to-slate-900  font-medium  bg-clip-text text-2xl text-transparent flex items-center justify-center '>
          Shop by Category
        </h1>
      </div>
      <div className='  w-auto h-auto    flex items-center justify-evenly  my-3 mx-4 gap-5   flex-wrap'>

        {
          category.map((category,idx)=>(
            <CategoryCard key={idx} category ={category.category} price={category.price} image={category.image} title={category.title}/>
          ))
        }
         

      </div>
      <div className='h-10  w-4xl     mt-4 ml-10 flex items-center justify-start   '>
        <h1 className='uppercase bg-linear-to-r from-red-400 via-red-600 to-slate-900  font-medium  bg-clip-text text-2xl text-transparent flex items-center justify-center '>
          Feature Products
        </h1>
      </div>

      <div className='  h-75   w-auto   flex items-center justify-between my-3 mx-10   '>
        {
          category.map((category,idx)=>(
            <FeatureProductCard key={idx}  price={category.price} image={category.image} title={category.title}/>
          ))
        }
         
      </div>
      <Carsoul2 />
      <About />
      <div className='h-10  w-4xl     mt-4 ml-10 flex items-center justify-start   '>
        <h1 className='uppercase bg-linear-to-r from-red-400 via-red-600 to-slate-900  font-medium  bg-clip-text text-2xl text-transparent flex items-center justify-center '>
          Best Sale
        </h1>
      </div>
      <div className='  h-75 w-auto   flex items-center justify-between    my-3 mx-10   '>
        <FeatureProductCard />
        <FeatureProductCard />
        <FeatureProductCard />
        <FeatureProductCard />
      </div>
      <Footer />

    </>
  )
}

export default App