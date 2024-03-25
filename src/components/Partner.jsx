import React from 'react'
import Image from 'next/image';
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
function Partner() {
  return (
    <div className='w-full'>
        <div className='flex px-[5rem] justify-between mt-10'>
        <div className=' mt-4'>
        <p className='text-white font-thin text-2xl w-[334px] hidden md:block'>Logistics services are all the elements of your supply chain, the factory to the end customer.</p>
        </div>
        <div className='grid md:items-center items-start'>
            <h1 className='text-white font-bold md:text-[3rem] text-[2rem] md:w-[496px] w-[270px]'>Some of Our Awesome <span className='bg-[#FCB218] text-black'>Partner</span></h1>
            <div className=' items-center ml-60 gap-4 hidden md:block'>
            </div>
        </div>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-5 gap-x-4 gap-y-16 md:pt-12 sm:pt-20 text-black md:m-24 m-10 items-center'>
          <div className='w-[210px] h-[80px] md:m-[0] m-[2rem]'>
            <Image src={logo1} alt=''/>
          </div>
          <div className='w-[140px] h-[70px] md:m-[0] m-[2rem]'>
            <Image src={logo2} alt=''/>
          </div>
          <div className='w-[158.46px] h-[70px] md:m-[0] m-[2rem]'>
            <Image src={logo3} alt=''/>
          </div>
          <div className='w-[210px] h-[90px] md:m-[0] m-[2rem]'>
            <Image src={logo4} alt=''/>
          </div>
          <div className='w-[245px] h-[84px] md:m-[0] m-[2rem]'>
            <Image src={logo5} alt=''/>
          </div>
        </div>
    </div>
  )
}

export default Partner