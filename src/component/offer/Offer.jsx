import React from 'react'
import backgroundImage from '../../assets/icon/bg-layer.png'
import bannerImage from '../../assets/media/offer.png'
import { GoArrowUpRight } from "react-icons/go";
function Offer() {
  return (
    <div className='w-full min-h-[700px] flex justify-center ' style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
      <section>
      <div className='rounded-[50px] my-10 h-[477px] flex justify-left items-center p-10'  style={{ 
        backgroundImage: ` radial-gradient(647.71% 142.52% at 98% 78%,rgb(2, 0, 67),rgba(2, 0, 67, 0.3) 100%), url(${bannerImage})` 
      }}>
        {/* contant */}
        <div className='text-white space-y-5'>
            <h3>Get Your <br />
First Appointment <br />
at 50% Off!</h3>
<div className='flex gap-2'>
<button className='md:flex items-center gap-1 font-semibold border px-3 py-2 bg-gold rounded-xl hidden'>Appoinment <GoArrowUpRight className='text-xl font-semibold'/></button>
<button className='md:flex items-center gap-1 font-semibold border px-3 py-2 bg-transparent rounded-xl hidden'>Appoinment <GoArrowUpRight className='text-xl font-semibold'/></button>
</div>

        </div>
      </div>
      </section>
    </div>
  )
}

export default Offer
