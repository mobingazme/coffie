import useLoginModal from '@/hooks/common/useLoginModal.okala'
import { Icon } from '@iconify/react'
import React from 'react'

const LogingLayout = ({ children }) => {
    const { closeLoginModal } = useLoginModal()
    return (
        <div className="w-screen h-screen   fixed backdrop-blur bg-[#00000056] overflow-hidden z-50  flex  justify-center    " style={{ maxWidth: 'inherit' }} >


            <div className="bg-yellow w-[400px] h-[550px] flex flex-col p-5 mt-10 justify-center items-center rounded-r-2xl animate__animated animate__backInUp">
                <img src="/image/lolo.png" />
                <h4 className="text-white text-2xl pt-5">به <span className="font-bold">Cultivation</span>خوش آمدید!</h4>
                <p className=" py-5 text-center " >ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه</p>
                <div className="flex justify-center items-center pt-5">
                    <Icon className='text-white border-2 border-white hover:bg-white  hover:text-yellow rounded-full w-12 ml-3 h-fit  p-2 transition-all delay-75' icon={'eva:facebook-fill'} />
                    <Icon className='text-white border-2 border-white hover:bg-white  hover:text-yellow rounded-full w-12 h-fit p-2 transition-all delay-75' icon={'dashicons:twitter'} />
                    <Icon className='text-white border-2 border-white hover:bg-white  hover:text-yellow rounded-full w-12 mx-3 h-fit p-2 transition-all delay-75' icon={'fa6-brands:youtube'} />
                    <Icon className='text-white border-2 border-white hover:bg-white  hover:text-yellow rounded-full w-12 h-fit p-2 transition-all delay-75' icon={'mdi:instagram'} />
                </div>
            </div>
            <div className="bg-white flex flex-col items-center h-[550px] mt-10 w-[400px] rounded-l-2xl p-5 animate__animated animate__backInUp">
                <div className="mr-[360px] pb-2 " onClick={() => closeLoginModal(false)} > <Icon className="w-7 h-fit  text-yellow rounded-full  " icon='mdi:close'></Icon></div>
                <h2 className="text-gray-900 flex justify-center text-2xl  ">ساخت حساب</h2>
                <div className="flex-col justify-center items-center py-5">

                    {children}
                </div>
            </div>
        </div>
    )
}

export default LogingLayout