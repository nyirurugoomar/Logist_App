import React from 'react'
import Image from 'next/image'
import Car from '../assets/hero-image.png'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function Hero() {
  return (
    <div className='w-full mb-10'>
       <div className='px-[8rem] flex mt-10'>
          <div><h1 className='text-white font-extrabold text-[5rem] tracking-tight	'>Grow Your <span className='text-[#FCB218]'>Business</span> With Our <span className='text-[#FCB218]'>Logistics</span> Service</h1></div>
          <div><p className='text-white font-thin text-2xl w-80 mt-10'>Once your business gets last-mile delivery right, it becomes hallmark of best service.</p></div>
       </div>
       <div className='mx-20'>
       <Image src={Car} alt='' className='w-[1236px] h-[910px]'/>
       </div>
       
       <div className='flex px-[7rem] justify-between mt-10'>
  <div className=' mt-4'>
    <p className='text-white font-thin text-2xl w-[334px]'>Cargo, also known as freight, refers to goods or produce being transported from one place to another – by water, air or land.</p>
  </div>
  <div className='grid items-center'>
    <h1 className='text-white font-bold text-[3rem] w-[496px]'>Our All <span className='bg-[#FCB218] text-black'>Solution</span> for Your Business</h1>
    <div className='flex items-center ml-60 gap-4'> {/* Use ml-auto to push items to the end */}
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