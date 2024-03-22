import React from 'react'
import Image from 'next/image'
import box from '../assets/box.png'

function Achievement() {
  return (
    <div className='w-full'>
    <div className='flex px-[5rem] justify-between mt-10'>
    <div className=' mt-4'>
    <h1 className='text-white font-bold md:text-[3rem] text-[2rem] md:w-[696px] w-[270px]'>Our All Logistic <br/><span className='bg-[#FCB218] text-black'>Achievement</span></h1>

    </div>
  <div className='grid md:items-center items-start'>
  <p className='text-white font-thin text-2xl w-[334px] hidden md:block'>Logistics services are all the elements of your supply chain, the factory to the end customer.</p>
  </div>
</div> 
<div className=''>
   <Image src={box} className='mt-10' alt='box'/>
</div>
<div className=''>
   <p className='text-white'>testing</p>
</div>
   

    </div>
  )
}

export default Achievement