import Loading from '@/pages/loading'
import { Icon } from '@iconify/react'
import React from 'react'




const profile = () => {



  return (
   <div className=' mt-40 md:mt-80'>
     <div className='bg-white w-80 md:w-[900px] h-full shadow-md rounded-lg flex-col  justify-center  ' >
      
      <div className='relative md:mr-15 flex  justify-center'>
      <img className='rounded-full w-40 ' src='/image/user_profile.jpg' />      
       <Icon className='text-white w-12 h-12 p-1 md:mr-[370px] mr-20 bg-yellow cursor-pointer rounded-full absolute top-36 right-14' icon={'ph:pencil-thin'} />
      </div>
      <h2 className='text-2xl text-gray-900 p-5 text-center md:text-start mt-5 md:mt-0'>اطلاعات اصلی</h2>
   <div className='grid grid-cols-1 md:grid-cols-2 pt-10'>
  
   <div className='p-5'>
    
      <div>
        <h4  className='text-xl text-gray-600 pb-5'>نام</h4>
        <input className='bg-white shadow-sm' placeholder='مبین'/>
      </div>
      <div className='pt-5'>
        <h4  className='text-xl text-gray-600 pb-5'>نام خانوادگی</h4>
        <input className='bg-white shadow-sm' placeholder='گزمه'/>
      </div>
      <div className='pt-5'>
        <h4  className='text-xl text-gray-600 pb-5'>ایمیل</h4>
        <input className='bg-white text-gray-600 shadow-sm' type='email' placeholder='mobingameh1@gmail.com'/>
      </div>
      
     
     </div>
     <div className='p-5'>
    
        <h4  className='text-xl text-gray-600 pb-5'>آدرس</h4>
        <input className='bg-white shadow-sm' placeholder='mobingameh1@gmail.com'/>
    
      <div className='pt-5'>
        <h4  className='text-xl text-gray-600 pb-5'>شماره تماس</h4>
        <input className='bg-white text-gray-600 shadow-sm' type='' placeholder='09121234567'/>
      </div>
      
     
     </div>
   </div>

  <div className='flex justify-center md:justify-start'>
  <button className='  m-5 w-20 h-10 rounded-full text-white bg-yellow hover:text-yellow hover:bg-white hover:border-yellow hover:border transition-all delay-75'>ذخیره</button>
  </div>


   </div>
  
   </div>
  )
}

export default profile