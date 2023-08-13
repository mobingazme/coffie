import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";

 const Slider11 = ()=> {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide > <img className="h-[420px] w-full"  src="/image/nody-عکس-با-کیفیت-قهوه-1633965565.jpg"/></SwiperSlide>
        <SwiperSlide> <img className="h-[420px] w-full" src="/image/coffee_farming.jpg"/></SwiperSlide>
        <SwiperSlide> <img className="h-[420px] w-full" src="/image/12.jpg"/></SwiperSlide>
       
      </Swiper>
    </>
  );
}

export default Slider11