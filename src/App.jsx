import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Carsoul from './Components/Carsoul'
import CategoryCard from './Components/CategoryCard'
import FeatureProductCard from './Components/FeatureProductCard'
import Carsoul2 from './Components/Carsoul2'
import About from './Components/About'
import Footer from './Components/Footer'
import { products } from './assets/frontend_assets/assets'

const App = () => {
  const [category, setCategory] = useState([]);
  const [isBestSale, setIsBestSale] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {

        //  console.log(products)

        const seen = new Set();
        const uniqueCategories = products.filter(product => {
          if (seen.has(product.category)) {
            return false;
          } else {
            seen.add(product.category)
            return true;
          }
        });
        setCategory(uniqueCategories);
        const bestSaleProducts = products.filter(product =>product.bestseller===true);
        setIsBestSale(bestSaleProducts);

      } catch (error) {
        console.log("error is : ", error);
      }
    };

    getProducts();
  }, [])

 
 
  return (
    <>
      <div className='relative'>
        <Navbar categories={category} />
      </div>
      <Carsoul />
      <div className='h-10 w-4xl     mt-4 ml-10 flex items-center justify-start   '>
        <h1 className='uppercase bg-linear-to-r from-red-400 via-red-600 to-slate-900  font-medium  bg-clip-text text-2xl text-transparent flex items-center justify-center '>
          Shop by Category
        </h1>
      </div>
      <div className='  w-auto h-auto    flex items-center justify-evenly  my-3 mx-4 gap-5   flex-wrap'>

        {
          category.map((category, idx) => (
            <CategoryCard key={idx} category={category.category} subCategory={category.subCategory} image={category.image[0]} />
          ))
        }


      </div>
      <div className='h-10  w-4xl     mt-4 ml-10 flex items-center justify-start   '>
        <h1 className='uppercase bg-linear-to-r from-red-400 via-red-600 to-slate-900  font-medium  bg-clip-text text-2xl text-transparent flex items-center justify-center '>
          {
            category.length > 0 ? " Feature Products" : "Loading..."
          }
        </h1>
      </div>

      <div className='  h-75   w-auto   flex items-center justify-evenly my-3 mx-10   '>
        {
          category.map((category, idx) => (
            <FeatureProductCard key={idx} desc={category.description} price={category.price} image={category.image[0]} name={category.name} />
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
      <div className='  h-auto w-auto gap-y-10  flex items-center justify-evenly flex-wrap   my-2 mx-10  '>
       {
         isBestSale.map((cat,idx)=>(
           
          <FeatureProductCard key={idx} image={cat.image[0]} price={cat.price} subCategory={cat.subCategory}/>
         ))
      }
        
      </div>
      <Footer />

    </>
  )
}

export default App