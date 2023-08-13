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
        title: ' ماگ هایه قهوه',
        img: '/image/coffee1.png',
        sprice:25000,

    },
    {
        id: 1,
        title: 'ربستا ',
        img: '/image/coffee_bag2.png',
        sprice:125000,

    },

    {
        id: 1,
        title: ' عربیکا',
        img: '/image/banner_coffee_bag.png',
        sprice:225000,

    },
    {
        id: 1,
        title: ' ماگ هایه قهوه',
        img: '/image/coffee1.png',
        sprice:25000,

    },

    {
        id: 1,
        title: 'ربستا ',
        img: '/image/coffee_bag2.png',
        sprice:125000,

    },

    {
        id: 1,
        title: ' عربیکا',
        img: '/image/banner_coffee_bag.png',
        sprice:225000,

    },



]



const Slider2 = ({ item }) => {
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
                       <div className="bg-white rounded-xl flex flex-col w-60 h-fit ">
                        <h6 className="bg-yellow text-white w-24 rounded-full px-2">30% تخفیف</h6>
                        <img className="w-48 h-48  m-4"  src={item.img}/>
                       <h4 className="text-black text-2xl flex justify-center ">{item.title}</h4>
                       <h4  className="text-black text-xl flex justify-center ">{item.sprice}</h4>

                       </div>
                       
                    </SwiperSlide>


                ))}

            </Swiper>
        </>
    );
}

export default Slider2




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