import React from 'react';
import Heroimg from '../img/woman_hero.png'
import { Link } from 'react-router-dom';


const Hero = () => {
  return( 
  <section className='h-[800px] bg-hero bg-no-repeat bg-cover 
  bg-center py-24'>
    <div className='container mx-auto flex justify-around h-full'
    >
      {/*Text */}
<div className='flex flex-col justify-center'>
  {/*PreTitle */}
  <div className='font-semibold items-center 
  uppercases'>
    <div className='w-10 h-[2px] bg red-500 mr-3'>
    
    </div>
  New Trend
  </div>
  <h1 className='text-[70px] leading-[1.1] font-light'>
    LINCOLNHUB SALE STYLISH <br/> 
  <span className='font-semibold'>WOMEN</span>
  </h1>
  <Link to={'/'} className='self-start uppercase font-semibold 
  border-b-2 border-primary'>
  Discover More</Link>
</div>
{/*Images */}
<div className='hidden lg:block'>
  <img src={Heroimg} alt=''/>
</div>
    </div>
    
    

  </section>);
};

export default Hero;
