
import React, { useEffect, useState } from 'react'
import Search from './SearchBox'



import { Icon } from '@iconify/react'
import Link from 'next/link'
import Login from '@/containers/login/Login'
import Saidbar from './Saidbar'
import Counter from '@/containers/product-detail/Counter'





const Header = () => {

    const [showBox, setShowBox] = useState(false);
    const [blog, setblog] = useState(false);
    const [search, setsearch] = useState(false);
    const [login, setLogin] = useState(false);
    const [saidbar, setSaidbar] = useState(false)
    const [cart, setCart] = useState(false)

    const [shadow, setShadow] = useState(false);
    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };

        window.addEventListener("scroll", handleShadow);

        return () => {
            window.removeEventListener("scroll", handleShadow);
        };
    }, []);

    return (
        <div id='header' className=' fixed z-50 md:w-auto  animate__fadeInUp animate__delay-1s'>
            <div className={
                shadow
                    ? "bg-white flex justify-around items-center rounded-none p-1 w-screen   h-32 md:h-24 animate__animated animate__fadeInUp animate__delay-2s "
                    : "bg-white flex justify-around items-center rounded-full p-1 w-screen  md:w-auto my-10 md:my-20 md:mx-20 h-32 md:h-24  animate__animated animate__fadeInUp animate__delay-2s "
            }
            >
                <div className=' hidden md:flex '>
                    <img src='/image/logo6.png'></img>
                </div>
                <div className="  items-center hidden md:flex">
                    <Link href={'/'} > <h2 className=" text-black text-lg p-6 w-auto   hover:text-yellow cursor-pointer">صفحه اصلی</h2></Link>
                    <h2 className=" text-black text-lg p-6 w-auto   hover:text-yellow cursor-pointer">درباره ما</h2>
                    <h2 className=" text-black text-lg p-6 w-auto   hover:text-yellow delay-100 cursor-pointer">خدمات</h2>

                    <h2 className=" text-black text-lg p-6 w-auto   hover:text-yellow delay-100 cursor-pointer" onMouseEnter={() => setblog(true)} onMouseLeave={() => setblog(false)}>بلاگ</h2>
                    <h2 className=" text-black text-lg p-6 w-auto   hover:text-yellow delay-100 cursor-pointer"  >گالری</h2>
                    <h2 className=" text-black text-lg p-6 w-auto   hover:text-yellow delay-100 cursor-pointer " onMouseEnter={() => setShowBox(true)} onMouseLeave={() => setShowBox(false)}>صفحات</h2>
                    <h2 className=" text-black text-lg p-6 w-auto   hover:text-yellow delay-100 cursor-pointer">تماس باما</h2>


                </div>

                {blog && (
                    <div className="bg-white p-4 w-36 rounded-lg flex-col justify-center items-center absolute top-24 left-[600px]  z-50 animate__animated animate__backInUp border-b-4 border-yellow "
                        onMouseEnter={() => setblog(true)}
                        onMouseLeave={() => setblog(false)}>
                        <ul className=' '>
                            <li className="text-gray-900 hover:text-yellow cursor-pointer">بلاگ</li>
                            <li className="text-gray-900 hover:text-yellow cursor-pointer py-2">ادامه مطالب </li>

                        </ul>
                    </div>
                )}



                {showBox && (
                    <div className="bg-white p-4 w-36 rounded-lg flex-col justify-center items-center absolute top-24 left-[410px]  z-50 animate__animated animate__backInUp border-b-4 border-yellow"
                        onMouseEnter={() => setShowBox(true)}
                        onMouseLeave={() => setShowBox(false)}>
                        <ul className=' '>
                            <Link href={'/profile'}>    <li className="text-gray-900 hover:text-yellow cursor-pointer">پروفایل</li></Link>
                            <Link href={'/Cart'}>   <li className="text-gray-900 hover:text-yellow cursor-pointer py-2">صفحه محصولات</li></Link>
                            <Link href={'/productDetails'}>  <li className="text-gray-900 hover:text-yellow cursor-pointer">سبد خرید</li></Link>

                        </ul>
                    </div>
                )}





                <div className=' flex flex-col md:flex-row justify-between items-center'>
                    <img className='md:hidden mb-4 w-[200px]  ' src='/image/logo6.png'></img>
                    <div className='flex ml-5'>
                        <Icon className='text-yellow  h-fit w-8 md:w-6 cursor-pointer' onClick={() => setsearch(!search)} icon={'majesticons:search-line'} />
                        <Icon className='text-black  h-fit w-8 md:w-6 mx-5 flex  cursor-pointer' onMouseEnter={() => setCart(true)} onMouseLeave={() => setCart(false)} icon={'icon-park-outline:buy'} />
                        <Icon className='text-black w-8 md:w-6 h-fit md:hidden cursor-pointer' onClick={() => setSaidbar(!saidbar)} icon={'ion:menu'} />
                    </div>
                    <div className='ml-5  w-auto'>

                        <button className='hidden md:flex items-center  bg-yellow hover:bg-white text-white hover:text-yellow hover:border border-yellow text-md px-10 w-40  h-12 rounded-full   transition-all delay-75' >وقت ملاقات</button>

                    </div>
                </div>

                {cart && (
                    <div className="bg-white  w-80 rounded-lg flex-col justify-center items-center absolute md:top-24 top-[140px] left-10 md:left-[150px]  z-50 animate__animated animate__backInUp border-b-4 border-yellow"
                        onMouseEnter={() => setCart(true)}
                        onMouseLeave={() => setCart(false)}>
                        <div className='flex-col  text-center p-4'>
                            <h4 className='text-gray-600 mb-3'>شما 3 مورد در سبد خرید خود دارید</h4>
                            <div className='flex justify-between items-center'>
                                <img className='w-14 h-fit' src='/image/coffee_bag2.png' />
                                <div>
                                    <h6 className='text-gray-900 mb-2'>قهوه روبستا</h6>
                                    <Counter />
                                </div>
                                <span className='text-gray-900'>22$</span>
                            </div>
                            <div className='flex justify-between items-center my-3'>
                                <img className='w-14' src='/image/coffee1.png' />
                                <div>
                                    <h6 className='text-gray-900 mb-2'>ماگ قهوه </h6>
                                    <Counter />
                                </div>
                                <span className='text-gray-900'>12$</span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <img className='w-14' src='/image/banner_coffee_bag.png' />
                                <div>
                                    <h6 className='text-gray-900 mb-2'>قهوه عربیکا</h6>
                                    <Counter />
                                </div>
                                <span className='text-gray-900'>42$</span>
                            </div>

                        </div>
                        <button className='w-full h-12 bg-yellow text-white font-bold'>پرداخت</button>
                    </div>
                )}


                {saidbar && <Saidbar sidebarHandler={setSaidbar} />}
                {search && <Search searchHandler={setsearch} />}



            </div>


        </div>
    )
}
export default Header;