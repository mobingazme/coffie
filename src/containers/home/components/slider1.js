import React, { useRef, useState } from "react";
import { Icon } from '@iconify/react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";


const myList = [
    {
        id: 1,
        title: 'مبین گزمه',
        img: '/image/coffee_team1.jpg',

    },
    {
        id: 1,
        title: 'مبین گزمه',
        img: '/image/mmm.jpg',

    },
    {
        id: 1,
        title: 'مبین گزمه',
        img: '/image/mmmm.jpg',

    },
    {
        id: 1,
        title: 'مبین گزمه',
        img: '/image/mmmmm.jpg',

    },
    {
        id: 1,
        title: 'مبین گزمه',
        img: '/image/coffee_team1.jpg',

    },
    {
        id: 1,
        title: 'مبین گزمه',
        img: '/image/mmm.jpg',

    },
    {
        id: 1,
        title: 'مبین گزمه',
        img: '/image/mmmm.jpg',

    },
    {
        id: 1,
        title: 'مبین گزمه',
        img: '/image/mmmmm.jpg',

    },

]

const slider1 = ({ item }) => {
    return (
        <>
            <Swiper
              breakpoints={{
                0: {
                  // width: 576,
                  slidesPerView: 1,
                  spaceBetween: 0
                },
                320: {
                  // width: 576,
                  slidesPerView: 1,
                  spaceBetween: 0
                },
                450: {
                    // width: 576,
                    slidesPerView: 1.20,
                    spaceBetween: 0
                  },
                576: {
                  // width: 576,
                  slidesPerView: 1.50,
                  spaceBetween: 0
                },
                676: {
                    // width: 576,
                    slidesPerView: 2,
                    spaceBetween: 0
                  },
                768: {
                  // width: 768,
                  slidesPerView: 2.20,
                  spaceBetween: 0
                },
                900: {
                    // width: 768,
                    slidesPerView: 3,
                    spaceBetween: 0
                  },
                1148: {
                  // width: 768,
                  slidesPerView: 4,
                  spaceBetween: 0
                },
              }}
                slidesPerView={4}
                spaceBetween={30}
               
             
                className="mySwiper"
            >

                {myList.map((item) => (

                    <SwiperSlide key={item.id} >
                        <div className='relative '>
                            <img className='rounded-t-2xl w-60 ' src={item.img} />
                            <Icon className='text-black hover:text-white bg-white hover:bg-yellow absolute bottom-20 delay-75 right-24 md:right-20 rounded-full w-16 p-5 h-fit cursor-pointer transition-all' icon={'bxs:phone-call'} />
                            <div className='bg-white  w-60 h-fit flex-col  text-center py-3 rounded-b-2xl'>
                                <h4 className='text-3xl text-black' > {item.title} </h4>
                                <h6 className='text-yellow text-lg'>مزرعه قهوه</h6>
                            </div>
                        </div>
                    </SwiperSlide>


                ))}

            </Swiper>
        </>
    );
}

export default slider1




{/*
<SwiperSlide >
                        <div className='relative '>
                            <img className='rounded-t-2xl w-60 ' src={item.img} />
                            <Icon className='text-black hover:text-white bg-white hover:bg-yellow absolute bottom-20 delay-75 right-20 rounded-full w-16 p-5 h-fit cursor-pointer transition-all' icon={'bxs:phone-call'} />
                            <div className='bg-white  w-60 h-fit flex-col  text-center py-3 rounded-b-2xl'>
                                <h4 className='text-3xl text-black' > {item.title} </h4>
                                <h6 className='text-yellow text-lg'>مزرعه قهوه</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                 */}