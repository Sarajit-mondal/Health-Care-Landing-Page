import React from 'react'
import grap from '../../assets/icon/grap.png'
import youtube from '../../assets/icon/youtube.png'
import certificate from '../../assets/icon/certificate.png'
import gold from '../../assets/icon/gold.png'
import bannerImage from '../../assets/media/banner.png'
import { FaStar } from 'react-icons/fa'
function Banner() {
  return (
    <div>
        <img src={bannerImage} alt="" className='rounded-[50px] my-10'  style={{ 
        backgroundImage: ` linear-gradient(179.57deg, rgba(0, 193, 157, 0) -25.412%,rgba(2, 0, 67, 0.47) 107.111%), url(${bannerImage})` 
      }} />

      {/* Grid layout */}
      <div className='grid grid-cols-5   [&>div]:rounded-[24px] [&>div]:h-[312px] gap-5'>
        <div className='bg-[#FFFFF5] p-5 max-w-[216px] '>
            <h2>90%</h2>
            <p className='text-[14px] max-w-[156px]'>Patient satisfaction rate, reflecting our commitment.</p>
            <img src={grap} alt="" className='mt-5 mx-auto' />
        </div>
        {/* center col */}
        <div className='col-span-3 grid grid-rows-2  [&>div]:rounded-[24px] gap-5 w-full'>
            <div>
                <h2 className='text-center text-[48px] leading-[44px]'>Comprehensive Care <br /> for Every Patient</h2>
            </div>
            {/* center button */}
            <div className='flex  justify-between   [&>div]:p-5 gap-5 items-end'>
            <div className='bg-[#FFFFF5] [&>div]:p-5 rounded-[24px] min-w-[216px]'>
            <h2>500+</h2>
            <p className='text-[14px] max-w-[156px]'>Board-certified <br/> doctors</p>
            <img src={certificate} alt="" className='ml-24 -mt-2' />

            </div>
            {/* center */}
            <div className=' bg-[#FFFFF5] p-5 rounded-[24px] min-w-[216px] max-h-[162px]'>
            <h2 className='flex items-center '>4.8 <FaStar className='text-gold'></FaStar></h2>
            <p className='text-[14px] max-w-[156px]'>Over 20,000 Patient</p>
            {/* patisepant image */}
            <div className='flex'>
               <img src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt=""  className='size-8 mt-5 rounded-full'/>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt=""  className='size-8 mt-5 rounded-full -ml-4'/>
               <img src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt=""  className='size-8 mt-5 rounded-full -ml-4'/>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&shttps://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt=""  className='size-8 mt-5 rounded-full -ml-4'/>
            </div>
            </div>
            {/* center bottom */}
            <div className='bg-[#FFFFF5] [&>div]:p-5 rounded-[24px] min-w-[216px]'>
            <h2>$5000</h2>
            <p className='text-[14px] max-w-[156px]'>Money spend <br />
            for poor patient</p>
            <img src={gold} alt="" className='ml-24 -mt-2' />

            </div>
            </div>
        </div>
        {/* center col */}
        <div className='bg-[#FFFFF5] p-5 min-w-[216px]'>
            <h2>50+</h2>
            <p className='text-[14px] max-w-[156px]'>Free lession video 
            for patient</p>
            <img src={youtube} alt="" className='mt-5 mx-auto' />
        </div>

      </div>
    </div>
  )
}

export default Banner
