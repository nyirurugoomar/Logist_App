import React from 'react'
import Image from 'next/image'
import box from '../assets/box.png'
import {SuccessData} from '../constants/index.js'

function Success() {
  return (
    <div className='w-full'>
        <div className='flex px-[5rem] justify-between mt-10'>
            <div className='mt-4'>
            <h1 className='text-white font-bold md:text-[3rem] text-[2rem] md:w-[696px] w-[270px]'>Our All Logistic <br/><span className='bg-[#FCB218] text-black'>Achievement</span></h1>
            </div>
            <div className='grid md:items-center items-start'>
            <p className='text-white font-thin text-2xl w-[334px] hidden md:block'>Logistics services are all the elements of your supply chain, the factory to the end customer.</p>
            </div>
        </div>
        <div className=''>
        <Image src={box} className='mt-20' alt='box'/>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4  gap-x-8 gap-y-16  md:pt-12 sm:pt-20 text-black md:m-24 m-10'>
            {SuccessData.map((item) =>(
               <div key={item.id} className='bg-[#161B25] w-[303px] h-[170px] p-8 rounded-[16px]'>
               <h1 className='text-[#FCCA18] text-[60px]'>{item.number}</h1>
               <p className='text-[#FCCA18] text-[20px]'>{item.description}</p>
            </div>
            ))}
        </div>

        
        
    </div>
  )
}

export default Success