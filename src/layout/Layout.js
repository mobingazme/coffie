import Footer from './../components/footer/Footer'
import Header from './../components/header/Header'
import React, { useEffect, useState } from 'react'

import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'
import Login from '@/containers/login/Login'
import ConfigProvider from '@/components/provider/ConfigProvider'
import LoginModalProvider, { LoginModalContext } from '@/components/provider/LoginModalProvider.okala'
import useLoginModal from '@/hooks/common/useLoginModal.okala'
import useAuth from '@/hooks/common/useAuth'

const Layout = ({ children }) => {

    const { openLoginModal, status } = useLoginModal()
    const { isUserLogedIn,logout } = useAuth()

    return (


        <div className='bg-white mx-auto h-full flex flex-col justify-between max-w-screnn '>
            <Header />
            <div className=' w-full h-fit  mx-auto'>
                {children}


            </div>
            {
                !isUserLogedIn ? <div className=' '>
                    <Icon onClick={() => openLoginModal(true)} className='text-white p-2 md:p-5 w-14 h-fit  bg-yellow rounded-full  md:w-20  cursor-pointer   fixed md:bottom-20 bottom-2 md:left-20 left-2  z-40 animate__animated  animate__pulse   animate__infinite' icon={'mdi:account-key'} />

                </div> :
                    <div className=' '>
                        <Icon onClick={() => logout()} className='text-white p-2 md:p-5 w-14 h-fit  bg-yellow rounded-full  md:w-20  cursor-pointer   fixed md:bottom-20 bottom-2 md:left-20 left-2  z-40 animate__animated  animate__pulse   animate__infinite' icon={'mdi:logout'} />

                    </div>
            }



            {status && <Login />}
            <Footer />
        </div>


    )
}

export default Layout