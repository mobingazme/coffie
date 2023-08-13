import { Icon } from '@iconify/react'
import React, { useState } from "react"
import Counter from './Counter';
import Login from '../home/login/Login';
//import { Icon } from "@iconify/react";



const ProductDetails = () => {
 
 
  return (
    
    <div className='bg-white w-screen h-full'>
      <div className=' shadow-lg rounded-lg flex-col m-20  mt-60 justify-center p-10 '>
        <div className=' flex justify-between m-10'>
          <h3 className='text-black text-2xl font-bold'>سبد خرید</h3>
          <h3 className='text-black text-2xl font-bold'>4 محصول در سبد خرید شما موجود است </h3>
        </div>
        <div className='flex justify-between pt-10'>
          <h4 className='text-gray-500 text-xl font-bold'>محصول</h4>
          <h4 className='text-gray-500 text-xl font-bold'>تعداد</h4>
          <h4 className='text-gray-500 text-xl font-bold'>قیمت</h4>
          <h4 className='text-gray-500 text-xl font-bold'>مجموع</h4>
          <h4 className='text-gray-500 text-xl font-bold'>حذف</h4>

        </div>
        <div className='flex justify-between pt-20 items-center'>
          <div className='flex items-center'>
            <img className='w-14' src='/image/banner_coffee_bag.png' />
            <h4 className='text-gray-900 text-xl'>قهوه عربیکا</h4>
          </div>
          <Counter/>
          <span className='text-gray-900 text-xl ml-10'>12,0000</span>
          <span className='text-gray-900 text-xl ml-12'>24,0000</span>
          <Icon className=" text-gray-900 w-6 h-fit cursor-pointer" icon='mdi:close'></Icon>
        </div>

        <div className='flex justify-between items-center pt-20'>
          <div className='flex items-center'>
            <img className='w-14' src='/image/coffee1.png' />
            <h4 className='text-gray-900 text-xl'>ماگ قهوه </h4>
          </div>
          <Counter/>

          <span className='text-gray-900 text-xl ml-10'>2,0000</span>
          <span className='text-gray-900 text-xl ml-12'>4,0000</span>
          <Icon className=" text-gray-900 w-6 h-fit cursor-pointer" icon='mdi:close'></Icon>
        </div>

        <div className='flex justify-between pt-20 items-center'>
          <div className='flex items-center'>
            <img className='w-14' src='/image/coffee_bag2.png' />
            <h4 className='text-gray-900 text-xl'>قهوه روبستا</h4>
          </div>
          <Counter/>
          <span className='text-gray-900 text-xl ml-10'>12,0000</span>
          <span className='text-gray-900 text-xl ml-12'>24,0000</span>
          <Icon className=" text-gray-900 w-6 h-fit cursor-pointer" icon='mdi:close'></Icon>
        </div>

        <div className='flex justify-between pt-20 items-center '>
          <div className='flex items-center'>
            <img className='w-14' src='/image/banner_coffee_bag.png' />
            <h4 className='text-gray-900 text-xl'>قهوه عربیکا</h4>
          </div>
          <Counter/>
          <span className='text-gray-900 text-xl ml-10'>12,0000</span>
          <span className='text-gray-900 text-xl ml-12'>24,0000</span>
          <Icon className=" text-gray-900 w-6 h-fit cursor-pointer" icon='mdi:close'></Icon>
        </div>
        <button className=' h-fit mt-10 w-auto p-3 rounded-full text-white bg-yellow hover:text-yellow hover:bg-white hover:border-yellow border transition-all delay-75 '>رفتن برایه پرداخت</button>

      </div>


    

    </div>
  )
}

export default ProductDetails