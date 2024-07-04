import React from 'react'
import empower from '../../assets/media/empower.png'
import { GoArrowUpRight } from "react-icons/go";
function Empower() {
  return (
    <div className='my-40 flex flex-col md:flex-row gap-10 md:gap-32 h-[456px]'>
    {/* left */}
    <div className='space-y-4'>
     <button className='px-3 py-1 border-2 rounded-2xl'>Service</button>
     <h2>Empowering Health, <br /> Enriching Lives</h2>
     <p className='max-w-[470px] pb-5'>We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
     </p>

     <button className=' md:flex items-center gap-1 font-semibold border px-3 py-2 bg-gold rounded-xl hidden'>Appointment<GoArrowUpRight className='text-xl font-semibold'/></button>
    </div>
    {/* right */}
    <div className='md:relative md:w-[568px] w-full'>
        <img src={empower} alt="" className='md:absolute w-full md:h-[415px] rounded-2xl'/>
        {/* card */}
        <div className='md:absolute z-10 bg-[#343268CC] bottom-16 left-5 md:w-96 text-left px-5 space-y-2 py-7 text-white rounded-3xl flex items-end gap-4'>
           <div>
           <h3>Advanced Technology</h3>
           <p>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
           </div>
            <button className='bg-gold p-2 rounded-full'><GoArrowUpRight className='text-xl font-semibold text-white'/></button>
        </div>
    </div>
</div>
  )
}

export default Empower
