// Importing useState hook from React and sendOtp function from services directory.
import { sendOtpRequest } from '@/services/Requests'
import useCountdown from './useCountdown'
import { useState } from 'react'

const initialParams = {
  type: 'email',
  exists: 2,
  minutes: 5,
}
// Defining a custom React hook called useSendOtp. It accepts an optional object of otherParams and initializes data state with default properties.
const useSendOtp = (otherParams = initialParams, otpResendTime = 12) => {
  const [data, setData] = useState({ ...initialParams, ...otherParams })
  // Using the useCountdown hook to manage the OTP resend countdown
  const otpCountDown = useCountdown(otpResendTime)
  const [isLoading, setIsLoading] = useState(false)

  // Defining a submit function that updates loading state and calls sendOtp function with otherParams and data as arguments.
  const submit = async (extraParams = initialParams) => {
    try {
      setIsLoading(true)
      otpCountDown.reset() // Start the OTP resend countdown
      otpCountDown.start() // Start the OTP resend countdown
      let response = await sendOtpRequest({ ...data, ...extraParams })
      setIsLoading(false)
      return response
    } catch (error) {
      otpCountDown.reset()
      return error
    }
  }

  // Returning an object containing data, loading, setLoading, setData, and submit functions as properties. setData function takes in an object of new parameters and updates the data state.
  return {
    data,
    isLoading,
    setIsLoading,
    setData: (newParams) =>
      setData((prevParams) => ({ ...prevParams, ...newParams })),
    submit,
    countDown: otpCountDown,
  }
}

export default useSendOtp // Exporting the useSendOtp hook.
