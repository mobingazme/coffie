import useAuth from './useAuth'
import useSendOtp from './useSendOtp'
import useloginAndRegister from './useloginAndRegister'
import useAlert from './useAlert'
import useLoginModal from './useLoginModal.okala'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

/**
 * A custom React hook for logging in with OTP [email or phone]
 * @param {['phone'|'email']} type - type of OTP login
 * @param {number} otpResendTime - time in minutes for OTP resend
 */

const stepKeys = {
  1: 'getPhone',
  2: 'getCodeAndPhone',
  3: 'getProfile',
}
const lastStepKey = Object.keys(stepKeys).length

const useLoginByOtp = ({ type = 'phone', otpResendTime = 120 } = {}) => {
  const [step, setStep] = useState(1)
  const router = useRouter()
  const { resetUser, isUserLogedIn, isLoading, user, setToken ,fetchUser} = useAuth()
  const { setLoginModalStatus } = useLoginModal()

  useEffect(() => {
    if (!isLoading) {
      if (isUserLogedIn) {
        if (user?.is_profile_complete == false) {
          setStep(3)
        }
      }
    }
  }, [user?.id])

  const stepControl = {
    nextStep: () => step + 1 <= lastStepKey && setStep((prev) => prev + 1),
    prevStep: () => step - 1 > 0 && setStep((prev) => prev - 1),
    setStep: setStep,
  }

  // Using the useSendOtp hook to send OTPs
  const sendOtpHook = useSendOtp({ type: type }, otpResendTime)
  // Using the login hook to login with otp data and email or phone number
  const loginHook = useloginAndRegister()
  // Using the useAlert hook to display alert messages
  const alert = useAlert()

  // Using useState to manage the form data
  const [data, setData] = useState({
    email: '',
    phone: '',
    code: '', //otp code
  })

  // Function to send OTP
  const sendOtpHandler = async (extraParams) => {
    // Extract the email from the form data and merge with other parameters
    const { email, ...other } = { ...data, ...extraParams }

    if (type === 'phone' || type === 'email') {
      let response = await sendOtpHook
        .submit(other) // Using the submit method of the sendOtpHook to send OTP
        .then((res) => {
          stepControl.nextStep()
          if (res?.data?.developer_message?.code) {
            login.setData({
              code: res?.data?.developer_message?.code,
            })
            setData((prev) => ({
              ...prev,
              code: res?.data?.developer_message?.code,
            }))
          }

          alert.success(res.data.user_message) // Display a success alert message if OTP is sent successfully
        })
        .catch((error) => {
          alert.error(error?.response?.data?.user_message) // Display an error alert message if OTP sending fails
        })
        .finally(() => sendOtpHook.setIsLoading(false)) // Set loading to false after sending OTP

      return response
    } else {
      console.error('TypeError: Please specify a valid type (phone/email)')
    }
  }

  // function to login with otp
  const loginHandler = async (extraParams) => {
    // Extract the email from the form data and merge with other parameters
    try {
      console.log('s')
      const Response = await loginHook.submit({ ...data, ...extraParams })
      let { is_profile_complete, token } = Response?.data?.result
      setToken(token)
      if (is_profile_complete == false) {
        stepControl.nextStep()
        sendOtpHook.countDown.stop()
      } else {
        fetchUser()
        setLoginModalStatus(false)
      }

      return Response
    } catch (err) {
      console.log(err)
      alert.error(err?.response?.data?.user_message)
      return err
    }
  }

  // Merge the sendOtp function with the sendOtpHook properties
  const otp = { ...sendOtpHook, submit: sendOtpHandler }
  const login = { ...loginHook, submit: loginHandler }
  // Return an object with the OTP properties and form data management functions
  return {
    otp,
    login,
    data,
    setData: (newP) => setData((prev) => ({ ...prev, ...newP })), // Merge new data with existing data
    resetData: (params) => setData(params), // Reset the form data
    step: stepKeys[step],
    stepControl,
    generalLoading: isLoading,
  }
}

export default useLoginByOtp // Exporting the custom hook for use in other components
