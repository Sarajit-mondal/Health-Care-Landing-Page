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
       <div className='rounded-[50px] my-10 h-[470px]'  style={{ 
        backgroundImage: ` linear-gradient(179.57deg, rgba(0, 193, 157, 0) -25.412%,rgba(2, 0, 67, 0.47) 107.111%), url(${bannerImage})` 
      }}></div>

      {/* Grid layout */}
      {/* Grid layout */}
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5'>
  <div className='bg-[#FFFFF5] p-5 max-w-full sm:max-w-[216px] rounded-[24px] h-[312px]'>
    <h2>90%</h2>
    <p className='text-[14px] max-w-[156px]'>Patient satisfaction rate, reflecting our commitment.</p>
    <img src={grap} alt="" className='mt-5 mx-auto' />
  </div>

  {/* Center col */}
  <div className='col-span-1 sm:col-span-2 lg:col-span-3 grid grid-rows-2 gap-5 w-full h-[312px]'>
    <div className='rounded-[24px] h-[156px] sm:h-auto'>
      <h2 className='text-center text-[24px] sm:text-[48px] leading-[44px]'>Comprehensive Care <br /> for Every Patient</h2>
    </div>
    {/* Center button */}
    <div className='flex flex-col sm:flex-row justify-between gap-5 items-end'>
      <div className='bg-[#FFFFF5] p-5 rounded-[24px] min-w-full sm:min-w-[216px]'>
        <h2>500+</h2>
        <p className='text-[14px] max-w-[156px]'>Board-certified <br/> doctors</p>
        <img src={certificate} alt="" className='ml-24 -mt-2' />
      </div>
      {/* Center */}
      <div className='bg-[#FFFFF5] p-5 rounded-[24px] min-w-full sm:min-w-[216px] max-h-[162px]'>
        <h2 className='flex items-center '>4.8 <FaStar className='text-gold'></FaStar></h2>
        <p className='text-[14px] max-w-[156px]'>Over 20,000 Patient</p>
        {/* Participants images */}
        <div className='flex'>
          <img src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="" className='size-8 mt-5 rounded-full' />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s" alt="" className='size-8 mt-5 rounded-full -ml-4' />
          <img src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="" className='size-8 mt-5 rounded-full -ml-4' />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s" alt="" className='size-8 mt-5 rounded-full -ml-4' />
        </div>
      </div>
      {/* Center bottom */}
      <div className='bg-[#FFFFF5] p-5 rounded-[24px] min-w-full sm:min-w-[216px]'>
        <h2>$5000</h2>
        <p className='text-[14px] max-w-[156px]'>Money spent <br /> for poor patients</p>
        <img src={gold} alt="" className='ml-24 -mt-2' />
      </div>
    </div>
  </div>

  {/* Right col */}
  <div className='bg-[#FFFFF5] p-5 min-w-full sm:min-w-[216px] rounded-[24px] h-[312px]'>
    <h2>50+</h2>
    <p className='text-[14px] max-w-[156px]'>Free lesson videos for patients</p>
    <img src={youtube} alt="" className='mt-5 mx-auto' />
  </div>
</div>

    </div>
  )
}

export default Banner
