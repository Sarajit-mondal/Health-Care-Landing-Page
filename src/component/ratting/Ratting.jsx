
import React, { useEffect, useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaStarHalf } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
function Ratting() {
  return (
    <div className='space-y-5 my-20'>
      <button className='px-3 py-1 border-2 rounded-2xl'>Testimonial</button>
      <h2>What they say about us</h2>

  {/* user say said */}
    <div>
    <div data-aos="fade-right">
      {/* right side */}
      {/* rating slider  */}
      <>
      <Swiper
        slidesPerView={window.innerWidth < 600 ? 1 :3}
        spaceBetween={30}
        freeMode={true}
        pagination={true} 
        modules={[Pagination]}
        //  modules={[FreeMode]}
        className="mySwiper"
        style={{ marginTop: '30px'}} 
      >
    
        {/* slider  */}
         <div>
         {
        allReview && allReview.map(review =>  <SwiperSlide key={review._id}>
          <div className='cursor-pointer justify-between min-h-[240px] p-4 space-y-3 '>
          <h3>{review.title}</h3>
          <p>{review.description}</p>
          <div className='flex items-center gap-2'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCniQHB7k5vbhtHKyCwb9RRxwBfR28Q2jr45c8lPn4T2cmH5vVsejyNLQsKFSr-cTpz7s&usqp=CAU" alt=""className='size-11 rounded-full' />
            <div>
              <h4 className='font-bold'>{review.name},<small className='font-semibold'>{review.surname}</small></h4>
              <span className='flex'>
          {
             [...Array(5)].map(rating => <FaStar className='text-[#FFE03D]' />)
           }
          </span>
            </div>
          
          </div>
          
          </div>
         </SwiperSlide>)
      }
         </div>
      </Swiper>
    </>
    </div>
    </div>
    </div>

   
  )
}

export default Ratting




const  allReview = [
    {
      "title": "Excellent Service",
      "description": "The staff were very professional and attentive.",
      "img": "https://example.com/images/user1.jpg",
      "name": "John",
      "surname": "Doe",
      "rating": 5
    },
    {
      "title": "Highly Recommend",
      "description": "Amazing experience, would definitely recommend.",
      "img": "https://example.com/images/user2.jpg",
      "name": "Jane",
      "surname": "Smith",
      "rating": 4.8
    },
    {
      "title": "Great Experience",
      "description": "Very satisfied with the service provided.",
      "img": "https://example.com/images/user3.jpg",
      "name": "Alice",
      "surname": "Johnson",
      "rating": 4.5
    },
    {
      "title": "Satisfactory",
      "description": "The service was good, but there's room for improvement.",
      "img": "https://example.com/images/user4.jpg",
      "name": "Robert",
      "surname": "Brown",
      "rating": 4
    },
    {
      "title": "Exceptional Care",
      "description": "The doctors were very caring and professional.",
      "img": "https://example.com/images/user5.jpg",
      "name": "Emily",
      "surname": "Davis",
      "rating": 5
    },
    {
      "title": "Friendly Staff",
      "description": "Everyone was very friendly and made me feel comfortable.",
      "img": "https://example.com/images/user6.jpg",
      "name": "Michael",
      "surname": "Wilson",
      "rating": 4.7
    },
    {
      "title": "Good Service",
      "description": "The service was good and timely.",
      "img": "https://example.com/images/user7.jpg",
      "name": "Sarah",
      "surname": "Moore",
      "rating": 4.3
    },
    {
      "title": "Highly Professional",
      "description": "Very professional and knowledgeable staff.",
      "img": "https://example.com/images/user8.jpg",
      "name": "David",
      "surname": "Taylor",
      "rating": 4.9
    },
    {
      "title": "Very Satisfied",
      "description": "Great service, very satisfied with the care received.",
      "img": "https://example.com/images/user9.jpg",
      "name": "Sophia",
      "surname": "Anderson",
      "rating": 5
    },
    {
      "title": "Good Experience",
      "description": "Overall, a good experience with minor delays.",
      "img": "https://example.com/images/user10.jpg",
      "name": "Daniel",
      "surname": "Thomas",
      "rating": 4.2
    }
  ]
  