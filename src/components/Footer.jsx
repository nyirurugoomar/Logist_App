import React from 'react'
import logo from '../assets/Logo.png'
import Image from 'next/image';


function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-lg mx-auto mb-4'>
            <Image src={logo} alt="" className='w-[133px] h-[32px] mx-auto ' />
        </div>

       
        <div className=' md:flex md:justify-around mt-6m text-center md:text-start'>
        <div className='text-white font-thin'>
            <h5>Blog</h5>
            <h5>Trendy</h5>
            <h5>Privacy policy</h5>
            <h5>Return Policy</h5>
        </div>
        
        <div className='text-white p-2 font-thin'>
            <h5 className='underline'>xyzfreelogisti@gmail.com</h5>
            <h5>ooo - (123) - 456</h5>
        </div>
        <div className='text-white font-thin'>
            <h5>Twitter</h5>
            <h5>Facebook</h5>
            <h5>Instagram</h5>
            <h1>LinkedIN</h1>
        </div>
    </div>
    </div>
  )
}

export default Footer