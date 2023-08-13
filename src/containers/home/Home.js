
import React, { useState } from 'react'
import Slider from './components/slider'

import Slider2 from './components/slider2'
import { Icon } from '@iconify/react'

import Home1 from './components/Home1'
import Home2 from './components/Home2'
import Home3 from './components/Home3'
import Home4 from './components/Home4'
import Home5 from './components/Home5'
import Home6 from './components/Home6'
import ProductDetails from "./../product-detail/ProductDetails"
import Profile from '@/pages/profile'
import Slider11 from '../cart/slider11'
import Login from './login/Login'
import Search from '@/components/header/SearchBox'


const Home = () => {
  const [login, setLogin] = useState(false);
  

  return (

    <div className='bg-white relative'>
      <div className='w-screen md:h-[800px] h-[500px]'>
        <Slider />
      </div>

      <div className='relative flex-col md:flex-row   py-10 mx-5 mt-20  md:p-10'>
        <div className=' flex   ' >
          <img className='rounde-xl' src='/image/coffee_about.jpg' ></img>
        </div>
        <div className='  pt-5 md:pt-0 md:absolute bottom-40 right-80 md:mr-40 mr-0'>
          <div className='flex-col flex items-center justify-center md:h-80  md:w-[800px] rounded-lg bg-greay p-5'>
            <h4 className='text-3xl text-white py-3'>درباره</h4>
            <h2 className='text-4xl text-yellow font-bold pb-5'>کشاورزی قهوه</h2>
            <p className='text-xl text-white text-center md:text-start'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
            <button className='text-xl border-b border-yellow text-yellow mt-3 md:mt-0'  >بیشتر بخوانید</button>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 hidden md:flex'>
          <img src='/image/coffee_bag2.png'></img>
        </div>
      </div>

      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Home6 />

      
    




    </div>
  )
}

export default Home
