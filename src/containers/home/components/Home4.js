import React from "react";
import { Icon } from '@iconify/react'
const Home4 = ()=>{
    return(
        <div className=' w-screen pt-20 '>
        <div className='flex flex-col justify-center items-center pb-20 '>
          <h4 className='text-black text-4xl py-2'> مشتریان    </h4>
          <img className='py-3' src='/image/coffee_underline.png' />
          <p className='text-black text-center p-3'>در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ
            <br />در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه رط سخت تایپ </p>
        </div>

        <div className='bg-greay  md:rounded-2xl  md:m-5 relative '>
          <img className=' absolute hidden md:flex bottom-[200px]  right-[600px] rounded-full' src='/image/testimonial_client3.jpg' />
          <p className='text-lg text-center  py-10'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک <br />است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی <br />تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
          <div className='flex justify-center'>
            <Icon className='text-gray-200 w-6 h-fit mt-5 ' icon={'lucide:move-right'} />
            <h4 className='text-yellow text-xl p-5'>مبین گزمه</h4>
            <Icon className='text-gray-200 w-6 h-fit mt-5  ' icon={'lucide:move-left'} />
          </div>
        </div>


      </div>
    )
}

export default Home4