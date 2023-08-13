
import 'swiper/css'
import 'swiper/css/pagination'
import { Icon } from '@iconify/react'
import 'animate.css';
const Search = ({ searchHandler }) => {



  return (
    <div className="w-screen h-screen fixed  flex  pt-40 mt-80 md:mt-0 md:mr-12 ml-2 items-center  backdrop-blur bg-[#00000056] overflow-hidden    
    z-50" style={{ maxWidth: 'inherit' }} >
    <Icon onClick={() => searchHandler(false)} className=" absolute md:top-80 top-3 left-5 text-yellow w-24 h-14   rounded-full" icon='mdi:close'></Icon> 
     
     <div className='w-full h-20 items-center md:m-40 m-2 flex  rounded-full animate__animated  animate__backInDown'>
      
        <input className='bg-white  w-full h-20 rounded-r-full p-5 text-xl'  placeholder='اینجا جستجو کنید...'></input>
        <button className=' text-white h-20 w-40 text-xl font-bold bg-yellow  rounded-l-full '>جستجو</button>
      

     </div>

     </div>

  
    
  )

}

export default Search
