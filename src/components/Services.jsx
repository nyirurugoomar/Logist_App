import React from 'react';
import Image from 'next/image';
import arrowUp from '../assets/arrow-up.png';
import { Services } from '../constants/index.js';

function ServicesComponent() {
  return (
    <div className='md:w-full'>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-16 md:pt-12 sm:pt-20 text-black md:m-24 m-10'>
        {Services.map((service) => (
          <div key={service.id} className='bg-[#FCB218] rounded-xl shadow-2xl md:h-[330px] h-[350px]'>
            <div className='p-10'>
              <div className='w-[50px] h-[50px]'>
                {/* <Image src={service.icon} alt='' width={50} height={50} /> */}
              </div>
              <div className='mt-4'>
                <h3 className='font-bold text-[24px] text-black'>{service.title}</h3>
                <p className='text-black text-[14px] mt-4 '>{service.description}</p>
              </div>
            </div>
            <div className='w-[50px] h-[50px] relative '>
              <Image src={arrowUp} className='absolute bottom-10 left-[215px] hidden md:block ' alt='arrow' />
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default ServicesComponent;
