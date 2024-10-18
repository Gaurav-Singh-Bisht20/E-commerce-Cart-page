import { useState } from 'react'
import Carousel from './Carousel'
import Carousel2 from './Carousel2';
import { useMediaQuery } from 'usehooks-ts';

const Hero = () => {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  const [count, setCount] = useState(0);

  function addCount (){
    setCount(prev => prev+1)
  }

  function decCount(){
    if(count>0){
      setCount(prev => prev-1)
    }
  }
  return (
    <div className='w-full md:w-[90vw] md:mt-12 mx-auto flex flex-col gap-8  md:gap-12 md:flex-row '>
         {isLargeScreen ? <Carousel2 /> : <Carousel />}
        <div className=' flex flex-col gap-4 lg:gap-8 w-[90vw] mx-auto md:w-full'>
            <p className='text-lg text-gray-400 '>SNEAKER COMPANY</p>
            <h2 className='text-4xl font-bold'>Fall Limited Edition Sneakers</h2>
            <p className='text-xl text-gray-500'>These low-profile sneakers are your perfat casual wear companion. Featuring a durable rubber outer sole, they will withstan everything the weather can offer</p>
            <div className='flex  md:flex-col justify-between'>
                <div className='flex gap-4'>
                <p className='text-3xl font-bold'>$ 125.00</p>
                <button className='bg-black py-1 px-2 text-white'>50%</button>
                </div>
                <p className='line-through text-lg text-gray-400'>$250.00</p>
            </div>
            <div className='flex flex-col md:flex-row justify-between gap-4'>
            <div className='flex justify-evenly items-center bg-slate-200 rounded-md  md:w-1/2 py-2'>
              <button onClick={decCount} className='text-orange-500 text-2xl font-bold'>-</button>
              <p className='text-xl'>{count}</p>
              <button onClick={addCount} className='text-orange-500 text-2xl font-bold'>+</button>
            </div>
            <div className ='flex gap-4 cursor-pointer bg-orange-500 py-2 justify-center items-center rounded-lg md:w-1/2'>
                <img src={'../../images/icon-cart.svg'} alt="" />
                <p>Add to cart</p>
             </div> 
            </div>  
        </div>
    </div>
  )
}

export default Hero