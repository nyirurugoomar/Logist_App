import React from 'react'
import Image from 'next/image'
import Car from '../assets/hero-image.png'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function Hero() {
  return (
    <div className='w-full mb-10'>
       <div className='md:px-[8rem] px-[3rem] md:flex md:mt-10 mt-10 mb-10'>
          <div><h1 className='text-white font-extrabold md:text-[5rem] text-[20px] tracking-tight'>Grow Your <span className='text-[#FCB218]'>Business</span> With Our <span className='text-[#FCB218]'>Logistics</span> Service</h1></div>
          <div><p className='text-white font-thin md:text-2xl hidden md:block md:w-80 mt-10'>Once your business gets last-mile delivery right, it becomes hallmark of best service.</p></div>
       </div>
       <div className='mx-10'>
       <Image src={Car} alt='' className='md:w-[1236px] w-[50rem] md:h-[910px] h-[20rem]'/>
       </div>
       
       <div className='flex px-[5rem] justify-between mt-10'>
  <div className=' mt-4'>
    <p className='text-white font-thin text-2xl w-[334px] hidden md:block'>Cargo, also known as freight, refers to goods or produce being transported from one place to another – by water, air or land.</p>
  </div>
  <div className='grid md:items-center items-start'>
    <h1 className='text-white font-bold md:text-[3rem] text-[2rem] md:w-[496px] w-[270px]'>Our All <span className='bg-[#FCB218] text-black'>Solution</span> for Your Business</h1>
    <div className=' items-center ml-60 gap-4 hidden md:block'> {/* Use ml-auto to push items to the end */}
      <button className='text-white rounded-3xl border-2 border-white'>
        <FaAngleLeft size={40}/>
      </button>
      <button className='text-black bg-[#FCB218] rounded-3xl border-2 border-white'>
        <FaAngleRight size={40}/>
      </button>
    </div>
  </div>
</div>

       

    </div>
  )
}

export default Hero