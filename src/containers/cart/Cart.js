
import React, { useState } from "react"

const { Icon } = require("@iconify/react");
import Cart from "@/pages/Cart";
import Slider11 from './slider11'
import ShowDetails from './showDetails'

const cart = () => {


 


    const [count, setCount] = useState(1);
    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="w-full bg-white  md:p-40 p-7 mt-40 md:mt-20">
            <div className="grid md:grid-cols-4  grid-cols-1 ">
                <div className=" w-40 hidden md:flex flex-col ">

                    <img className="w-28 h-32 rounded-lg border-yellow border-2 p-2" src="/image/nody-عکس-با-کیفیت-قهوه-1633965565.jpg" />
                    <img className="w-28 h-32 rounded-lg border-yellow border-2 p-2 my-4" src="/image/coffee_farming.jpg" />
                    <img className="w-28 h-32 rounded-lg border-yellow border-2 p-2" src="/image/12.jpg" />

                </div>

                <div className="md:w-[350px] w-[300px] md:col-span-2 mr-8 md:mr-0">
                    <Slider11 />
                </div>


                <div className=" mt-5 md:mt-0 mr-0">
                    <h2 className="text-gray-900 text-2xl">قهوه عربیکا</h2>
                    <h4 className="text-gray-500">کیلویی</h4>
                    <div className="flex mt-5">
                        <Icon className='text-yellow mx-1 w-5 h-fit' icon={'clarity:star-solid'} />
                        <Icon className='text-yellow w-5 h-fit' icon={'clarity:star-solid'} />
                        <Icon className='text-yellow mx-1 w-5 h-fit' icon={'clarity:star-solid'} />
                        <Icon className='text-gray-500 w-5 h-fit' icon={'clarity:star-solid'} />
                        <Icon className='text-gray-500 mx-1 w-5 h-fit' icon={'clarity:star-solid'} />
                        <h4 className="text-gray-500">151 بازخورد</h4>
                    </div>
                    <div className="flex mt-5">
                        <h4 className="text-gray-500 ml-5 text-lg ">کد محصول :12948</h4>
                        <h4 className="text-gray-500 text-lg">وضعیت : <span className="text-yellow text-lg">درانبار</span></h4>
                    </div>
                    <p className="text-gray-500 pt-5 text-center md:text-start">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع  .</p>
                    <div className="flex mt-5 ">
                        <h4 className="text-gray-900 text-xl">89000</h4>
                        <del className="text-gray-500 text-lg mx-3">98000</del>
                        <h4 className="text-yellow ">10% تخفیف</h4>
                    </div>
                    <div className="flex justify-around items-baseline ">
                        <div className="flex border rounded-lg  p-1">
                            <Icon className='text-yellow  w-5 font-bold h-fit cursor-pointer' onClick={handleIncrement} icon={'gg:math-plus'} />
                            <h4 className="text-gray-500 w-7 h-fit mr-1">{count}</h4>
                            <Icon className='text-yellow  w-5 h-fit font-bold' onClick={handleDecrement} icon={'gg:math-minus'} />
                        </div>
                        <button className=' h-fit mt-10 w-auto p-3 rounded-full text-white bg-yellow hover:text-yellow hover:bg-white hover:border-yellow border transition-all delay-75 hover:animate__animated animate__zoomOut'>افزودن ب سبد خرید</button>
                    </div>
                </div>

            </div>


            <ShowDetails/>

          



        </div>
    )
}

export default cart;