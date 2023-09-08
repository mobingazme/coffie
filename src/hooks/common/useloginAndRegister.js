import { loginRegisterRequest } from '@/services/Requests'
import React, { useState } from 'react'
 
const initialState = {
  email: '',
  phone: '',
  code: '',
 
}
const useloginAndRegister = (params = initialState) => {
  const [data, setData] = useState(params)
  const [isLoading, setIsloading] = useState(false)

  const submit = async (extraParams = {}) => {
    setIsloading(true)
    try {
      const response = await loginRegisterRequest({ ...data, ...extraParams })
      return response
    } catch (error) {
      console.error(error)
      throw error // re-throw the error to handle it in the calling code
    } finally {
      setIsloading(false)
    }
  }

  //TODO: اینجا هنوز تصمیم نگرفتم که داده هارو از همینجا توی کانتکست کاربر جا گذاری کنم یا در لایه های بالاتر

  return {
    submit,
    isLoading,
    data,
    setData: (newParam) =>
      setData((prevData) => ({ ...prevData, ...newParam })),
    resetData: setData,
    setIsloading,
  }
}

export default useloginAndRegister
