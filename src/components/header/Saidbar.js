



import { Icon } from "@iconify/react";
import 'animate.css';
import Link from "next/link";


const Saidbar = ({ sidebarHandler }) => {
    return (
        <div className="w-full h-screen fixed backdrop-blur bg-[#00000056] overflow-hidden mt-80
        z-50" style={{ maxWidth: 'inherit' }} >
            <div className="flex-col animate__animated animate__bounceInRight  bg-yellow max-w-[200px] h-[100%]">
                <div onClick={() => sidebarHandler(false)} className="flex justify-end py-5 "> <Icon className="w-8 h-8 " icon='mdi:close'></Icon></div>

                <div className="px-5">
                    <Link href={'/'}>   <butun className=" cursor-pointer flex items-center   hover:bg-[#fcdc40] rounded-xl w-atuo px-2 delay-100  transition-all duration-200 ease-in-out mt-2 h-10">
                        <Icon className="" icon="iconoir:multiple-pages-empty" width={24} height={24} color="#fff" />
                        <h6 className=" text-white  p-2 "> صفحه اصلی</h6>
                    </butun>
                    </Link>
                    <butun className=" cursor-pointer flex items-center   hover:bg-[#fcdc40] rounded-xl w-atuo px-2 delay-100  transition-all duration-200 ease-in-out mt-2 h-10">
                        <Icon className="animate__animated animate__swing animate__delay-1s animate__infinite infinite" icon="ph:bell-ringing-light" width={24} height={24} color="#fff" />
                        <h6 className=" text-white p-2"> درباره ما</h6>
                    </butun>
                    <butun className=" cursor-pointer flex items-center  hover:bg-[#fcdc40] rounded-xl w-atuo px-2 delay-100  transition-all duration-200 ease-in-out mt-2 h-10">
                        <Icon icon="game-icons:coffee-beans" width={24} height={24} color="#fff" />
                        <h6 className=" text-white  p-2"> خدمات </h6>
                    </butun>
                    <butun className="cursor-pointer flex items-center  hover:bg-[#fcdc40] rounded-xl w-atuo px-2 delay-100  transition-all duration-200 ease-in-out mt-2 h-10">
                        <Icon icon="clarity:image-gallery-line" width={24} height={24} color="#fff" />
                        <h6 className=" text-white  p-2">    گالری</h6>
                    </butun>
                    <butun className=" cursor-pointer flex items-center   hover:bg-[#fcdc40] rounded-xl w-atuo px-2 delay-100  transition-all duration-200 ease-in-out mt-2 h-10">
                        <Icon className="" icon="tabler:brand-blogger" width={24} height={24} color="#fff" />
                        <h6 className=" text-white  p-2 "> بلاگ</h6>
                    </butun>
                    <butun className=" cursor-pointer flex items-center   hover:bg-[#fcdc40] rounded-xl w-atuo px-2 delay-100  transition-all duration-200 ease-in-out mt-2 h-10">
                        <Icon className="" icon="zondicons:heart" width={24} height={24} color="#fff" />
                        <h6 className=" text-white  p-2 "> غلاقه مندی ها</h6>
                    </butun>
                    <butun className=" cursor-pointer flex items-center   hover:bg-[#fcdc40] rounded-xl w-atuo px-2 delay-100  transition-all duration-200 ease-in-out mt-2 h-10">
                        <Icon className="" icon="fluent:call-20-regular" width={24} height={24} color="#fff" />
                        <h6 className=" text-white  p-2 "> تماس باما</h6>
                    </butun>

                </div>

            </div>
        </div>
    )
}

export default Saidbar;