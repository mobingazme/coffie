import React, { useState } from 'react'
import { loginRegisterRequest } from './../../services/Requests'
const initialState = {//یک شی شامل مقادیر اولیه مربوط ب رود کار بر است
  email_or_phone_or_username: '',
  email: '',
  phone: '',
  password: '',
  code: '',
  type: '',
}

//توابع مربوط ب مدیریت ارور
const uselogin = (params = initialState) => {
  const [data, setData] = useState(params) //مقدار اولیه data ب عنوان مقدار اولیه params استفاده میشود
  const [isLoading, setIsloading] = useState(false)

  const submit = async (extraParams = {}) => {//یک تابع با پارامتر اختیاری extraParams
    setIsloading(true)//در حال بارگذاری است
    try {
      //یک درخواست ورد انجام میشود
      const response = await loginRegisterRequest({ ...data, ...extraParams })
      return response//پاسخ دریافتی از درخواست ورد رو برمیگردونه
    } catch (error) { //در صورت بروز خطا در ارسال درخواست ورد
      console.error(error)
      throw error // خطا را دوباره پرتاب کنید تا آن را در کد تماس بررسی کنید
    } finally {
      setIsloading(false)//پایان بار گذاری
    }
  }

  //TODO: اینجا هنوز تصمیم نگرفتم که داده هارو از همینجا توی کانتکست کاربر جا گذاری کنم یا در لایه های بالاتر

  return {
    submit,//ارسال فرم ورد ب سیستم
    isLoading,//ایا در حالت بار گذاری است یا خیر
    data,//اطلاعات ورد کار بر ب سیستم
    setData: (newParam) => // تابعی ک مقدار data را بروز رسانی میکند
      setData((prevData) => ({ ...prevData, ...newParam })),
    resetData: setData, //تابعی ک مقادیر data را ب حالت اولیه بر میگرداند(initialState)
    setIsloading,//بروز رسانی مقدار isLoading
  }
}

export default uselogin
