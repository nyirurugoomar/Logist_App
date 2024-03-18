import React from 'react'
import Image from 'next/image'
import logo from '../assets/Logo.png'
import { FaAlignJustify } from "react-icons/fa";

function Header() {
  return (
   <div className='w-full'>
    <div className=' flex justify-around mt-4'>
        <div>
            <Image src={logo} alt="" className='w-full h-[25px]' />
        </div>
        <div className='text-white p-2'>
            <FaAlignJustify size={18}/>
        </div>
        <div>
            <button className='bg-[#FCB218] p-2 text-black rounded-full px-4'>Let’s Talk</button>
        </div>
    </div>
   </div>
  )
}

export default Header