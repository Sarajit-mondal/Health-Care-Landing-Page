import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import missition from "../../assets/media/mission.png"
function Misstion() {
  return (
    <div className='my-40 flex flex-col md:flex-row gap-10 md:gap-32 h-[456px]'>
        {/* left */}
        <div className='space-y-4'>
         <button className='px-3 py-1 border-2 rounded-2xl'>who we are</button>
         <h2>We Help To Get <br /> Soultions</h2>
         <p className='max-w-[470px] pb-5'>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
         </p>

         <button className=' md:flex items-center gap-1 font-semibold border px-3 py-2 bg-gold rounded-xl hidden'>Learn more<GoArrowUpRight className='text-xl font-semibold'/></button>
        </div>
        {/* right */}
        <div className='md:relative md:w-[568px] w-full'>
            <img src={missition} alt="" className='md:absolute w-full md:h-[415px]'/>
            {/* card */}
            <div className='block md:absolute z-10 bg-[#343268] -bottom-10 -left-20 md:w-96 text-left px-5 space-y-2 py-7 text-white rounded-3xl'>
                <h3>Our mission is simple</h3>
                <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
            </div>
        </div>
    </div>
  )
}

export default Misstion

