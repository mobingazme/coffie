import React from "react";
import Slider2 from "./slider2"
const Home5 =() =>{
    return(
        <div className='bg-greay w-screen mt-20 p-20'>
        <div className='flex flex-col justify-center items-center '>
          <h4 className='text-white text-4xl py-2'> فروشگاه آنلاین     </h4>
          <img className='py-3' src='/image/coffee_underline.png' />
          <p className='text-white text-center'>در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ
            <br />در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه رط سخت تایپ </p>
        </div>
        <div className='  pt-10'>
          <Slider2 />

        </div>

      </div>
    )
}

export default Home5