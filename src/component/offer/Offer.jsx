import React from 'react'
import backgroundImage from '../../assets/icon/bg-layer.png'
import bannerImage from '../../assets/media/offer.png'
function Offer() {
  return (
    <div className='w-full min-h-[700px] flex justify-center ' style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
      <section>
      <div className='rounded-[50px] my-10 h-[477px]'  style={{ 
        backgroundImage: ` radial-gradient(647.71% 142.52% at 98% 78%,rgb(2, 0, 67),rgba(2, 0, 67, 0.3) 100%), url(${bannerImage})` 
      }}>
        {/* contant */}
        <div className='text-white'>
            <h3>Get Your
First Appointment
at 50% Off!</h3>

<button className='md:flex items-center gap-1 font-semibold border px-3 py-2 bg-[#D9EFFA] rounded-xl hidden'>Appoinment <GoArrowUpRight className='text-xl font-semibold'/></button>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Offer
