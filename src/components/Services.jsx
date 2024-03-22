import React from 'react'
import icon1 from '../assets/icon1.png'
import arrowUp from '../assets/arrow-up.png' 
import carIcon from '../assets/Icon-car.png'
import airIcon from '../assets/air-icon.png'
import cargoIcon from '../assets/Cargo-icon.png'
import Image from 'next/image'

function Services() {
  return (
    <div className='md:w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-4  gap-x-8 gap-y-16  md:pt-12 sm:pt-20 text-black md:m-24 m-10'>

        <div className='bg-[#FCCA18] rounded-xl shadow-2xl md:h-[330px] h-[350px]'>
              
                  <div className='p-10'>
                     <div class='w-[50px] h-[50px]'>
                       <Image src={icon1}  alt='/'/>
                      </div>
                      <div className='mt-4'>
                      <h3 className='font-bold text-[24px] text-orange'>Container Provide</h3>
                      <p className='text-black text-[14px] mt-4'>Containerized cargo means general or wares that are shipped in reusable. commercial sized shipping containers.</p>
                      </div>
                  </div>
                     <div className='w-[50px] h-[50px] relative '>
                       <Image src={arrowUp} className='absolute bottom-10 left-[215px] hidden md:block'  alt='/'/>
                      </div>
                  
              </div>
              <div className='bg-[#FF7222] rounded-xl shadow-2xl md:h-[330px]  h-[350px]'>
              
                  <div className='p-10'>
                     <div className='w-[50px] h-[50px]'>
                       <Image src={carIcon}  alt='/'/>
                      </div>
                      <div className='mt-4'>
                      <h3 className='font-bold text-[24px]  text-orange'>Road Freight</h3>
                      <p className='text-black text-[14px] mt-4'>Road transport means transportation of goods and personnel from one place to the other on roads.</p>
                      </div>
                  </div>
                     <div className='w-[50px] h-[50px] relative '>
                       <Image src={arrowUp} className='absolute bottom-10 left-[215px] hidden md:block'  alt='/'/>
                      </div>
                  
              </div>
              <div className='bg-[#2C7BF2] rounded-xl shadow-2xl md:h-[330px]  h-[350px]'>
              
                  <div className='p-10'>
                     <div className='w-[50px] h-[50px]'>
                       <Image src={airIcon}  alt='/'/>
                      </div>
                      <div className='mt-4'>
                      <h3 className='font-bold text-[24px]  text-orange'>Container Provide</h3>
                      <p className='text-black text-[14px] mt-4'>Air freight parcel delivery is the transfer and shipment of goods via an air carrier, which may be charter or commercial.</p>
                      </div>
                  </div>
                     <div className='w-[50px] h-[50px] relative '>
                       <Image src={arrowUp} className='absolute bottom-10 left-[215px] hidden md:block'  alt='/'/>
                      </div>
                  
              </div>
              <div className='bg-[#09CA4B] rounded-xl shadow-2xl md:h-[330px]  h-[350px]'>
              
                  <div className='p-10'>
                     <div className='w-[50px] h-[50px]'>
                       <Image src={cargoIcon}  alt='/'/>
                      </div>
                      <div className='mt-4'>
                      <h3 className='font-bold text-[24px]  text-orange'>Cargo Freight</h3>
                      <p className='text-black text-[14px] mt-4'>Cargo, also known as freight, refers to goods or produce being transported from one place to another.</p>
                      </div>
                  </div>
                     <div className='w-[50px] h-[50px] relative '>
                       <Image src={arrowUp} className='absolute bottom-10 left-[215px] hidden md:block'  alt='/'/>
                      </div>
                  
              </div>
        </div>
    </div>
  )
}

export default Services