
import NordesBackEnd from "@/service/Api";
import { loginByPhoneAndPassRequest, sendOtpRequest } from "@/service/Requests";
import { Icon } from "@iconify/react";
import Cookies from "js-cookie";
import  Router  from "next/router";
import { useState } from "react";


{/*Cookies.set('token', res.data.result.token)
        NordesBackEnd.setToken(res.data.result.token)
        alert(res.data.user_message)
        console.log(res.data.result.token) */}



const Login = ({ loginHandler }) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showFirstInput, setShowFirstInput] = useState(true);
  const [showSecondInput, setShowSecondInput] = useState(false);
  const [buttonText, setButtonText] = useState('  ارسال کد');
  const [code, setCode] = useState({
    code: '',
  })
  const [phone, setPhone] = useState({
    phone: '',

  })
  const changeDataCodeHandler = (newParams = {}) => setCode(prev => ({ ...prev, ...newParams }))
  const changeDataPhoneHandler = (newParams = {}) => setPhone(prev => ({ ...prev, ...newParams }))//برایه بروز رسانی داده ها و نمایش انها

  //send otp request
  const otpRequestSubmitHandler = () => {
    sendOtpRequest()
      .then((res) => {
        if (statuse === 201) {
          setSuccessMessage(res.user_message);
          setErrorMessage('');
        } else (err) => {
          setSuccessMessage('');
          setErrorMessage(res.user_message);
        }

      })

    }

    //login request by otp
    const loginRequestSubmitHandler = ()=>{
      loginByPhoneAndPassRequest()
      .then((res) => {
        if (statuse === 201) {
          Cookies.set('token', res.result.token)
          NordesBackEnd.setToken(res.result.token)
          alert(res.user_message)
          setSuccessMessage(res.user_message);
          setErrorMessage('');
          Router.push('/src/pages/Cart.js')
        }else{
          setSuccessMessage('');
        setErrorMessage(res.user_message);
        }
      })

    }


  //عملیات ورد و تغییر نام  دکمه
  const handleButtonClick = () => {
    toggleInput();
    otpRequestSubmitHandler();
    loginRequestSubmitHandler();
  };

  //cheng button and input
  const toggleInput = () => {
    if (showFirstInput) {
      setShowFirstInput(false);
      setShowSecondInput(true);
      setButtonText('  ورود');
    } else {
      setShowFirstInput(true);
      setShowSecondInput(false);
      setButtonText(' ارسال کد ');
    }
  };



  return (
    <>
      <div className="w-screen h-screen   fixed backdrop-blur bg-[#00000056] overflow-hidden z-50  flex  justify-center    " style={{ maxWidth: 'inherit' }} >


        <div className="bg-yellow w-[400px] h-[500px] flex flex-col p-5 mt-20 justify-center items-center rounded-r-2xl animate__animated animate__backInUp">
          <img src="/image/lolo.png" />
          <h4 className="text-white text-2xl pt-5">به <span className="font-bold">Cultivation</span>خوش آمدید!</h4>
          <p className=" py-5  " >ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه</p>
          <button className="text-yellow bg-white hover:bg-yellow hover:text-white hover:border-white border-2 w-32 h-12 rounded-3xl transition-all delay-75 ">ورود</button>
          <div className="flex justify-center items-center pt-5">
            <Icon className='text-white border-2 border-white hover:bg-white  hover:text-yellow rounded-full w-12 ml-3 h-fit  p-2 transition-all delay-75' icon={'eva:facebook-fill'} />
            <Icon className='text-white border-2 border-white hover:bg-white  hover:text-yellow rounded-full w-12 h-fit p-2 transition-all delay-75' icon={'dashicons:twitter'} />
            <Icon className='text-white border-2 border-white hover:bg-white  hover:text-yellow rounded-full w-12 mx-3 h-fit p-2 transition-all delay-75' icon={'fa6-brands:youtube'} />
            <Icon className='text-white border-2 border-white hover:bg-white  hover:text-yellow rounded-full w-12 h-fit p-2 transition-all delay-75' icon={'mdi:instagram'} />
          </div>
        </div>
        <div className="bg-white flex flex-col items-center h-[500px] mt-20 w-[400px] rounded-l-2xl p-5 animate__animated animate__backInUp">
          <div className="mr-[360px] pb-2 " onClick={() => loginHandler(false)} > <Icon className="w-7 h-fit  text-yellow rounded-full  " icon='mdi:close'></Icon></div>
          <h2 className="text-gray-900 flex justify-center text-2xl  ">ساخت حساب</h2>
          <form className="flex-col justify-center items-center py-5">
            <div>

              {showFirstInput && (
                <input
                  className="w-fit h-8 my-5 bg-gray-300 p-2 text-gray-900"
                  placeholder="شماره تلفن"
                  value={phone.phone}
                  onChange={e => changeDataPhoneHandler({ phone: e.target.value?.replace(/\D/g, '') })}
                  type="tel"
                />
              )}


              {
                showSecondInput && (
                  <input
                    className="w-fit h-8 my-5 bg-gray-300 p-2 text-gray-900"
                    placeholder="کد را وارد کنید "
                    value={code.code}
                    onChange={e => changeDataCodeHandler({ code: e.target.value })}
                  />
                )
              }

            </div>


            {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
            {successMessage && <p className="text-sm text-red-500">{successMessage}</p>}






            <button


              onClick={handleButtonClick}
              type="submit"
              className="text-white bg-yellow hover:bg-white hover:text-yellow hover:border-yellow border-2 w-32 h-12 rounded-3xl transition-all delay-75 mt-10">
              {buttonText}
            </button>



          </form>


        </div>

      </div>
    </>
  )
}
export default Login;
