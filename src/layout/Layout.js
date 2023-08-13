import Footer from './../components/footer/Footer'
import Header from './../components/header/Header'
import React, { useEffect, useState } from 'react'

import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'
import Login from '@/containers/home/login/Login'

const Layout = ({ children }) => {

    const [login, setLogin] = useState(false);

    return (
        <div className='bg-white mx-auto h-full flex flex-col justify-between max-w-screnn '>
            <Header />
            <div className='  h-fit  mx-auto'>
                {children}
             

            </div>
            <div className=' '>
                    <Icon onClick={() => setLogin(!login)} className='text-white p-2 md:p-5 w-14 h-fit  bg-yellow rounded-full  md:w-20  cursor-pointer   fixed md:bottom-20 bottom-2 md:left-20 left-2  z-40 animate__animated  animate__pulse   animate__infinite' icon={'mdi:account-key'} />

                </div>



                {login && <Login loginHandler={setLogin} />}
            <Footer />
        </div>
    )
}

export default Layout