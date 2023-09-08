import { useState, useEffect } from 'react'

/**
 * یک قلاب React سفارشی برای تایمر شمارش معکوس
 * @param {number} initialSeconds - تعداد ثانیه های تایمر شمارش معکوس
 * @returns {Object} - یک شی حاوی دقیقه، ثانیه، و عملکردهای فعلی برای شروع، توقف و تنظیم مجدد تایمر
 */
const useCountdown = (initialSeconds) => {
  const [seconds, setSeconds] = useState(initialSeconds) // برای ثانیه های باقیمانده حالت دهید
  const [isActive, setIsActive] = useState(false) // حالت برای حالت فعال/غیرفعال تایمر

  /**
   * تایمر شمارش معکوس را شروع می کند
   */
  const start = () => {
    setIsActive(true)
  }

  /**
   * تایمر شمارش معکوس را متوقف می کند
   */
  const stop = () => {
    setIsActive(false)
  }

  /**
   * تایمر شمارش معکوس را به مقدار اولیه بازنشانی می کند
   */
  const reset = () => {
    setIsActive(false)
    setSeconds(initialSeconds)
  }

  // از قلاب useEffect برای به روز رسانی زمان باقی مانده در هر ثانیه استفاده کنید
  useEffect(() => {
    let interval = null //مقدار اولیه متغییر را تال قرار میدیم
    if (isActive && seconds > 0) { //اگر تایمر فعال بود و ثانیه هایه باقی مانده کمتر از صفر بود
      interval = setInterval(() => {//هرثانیه مقدار secons رو 1واحد کاهش میدهد
        setSeconds((prevSeconds) => prevSeconds - 1) //استفاده از مقدار قبلی
      }, 1000)
    } else if (isActive && seconds === 0) {//اگر تایمر فعال بود و ثانیه هایه باقی مانده صفر بودند
      clearInterval(interval)//با استفاده ازinterval تابعclearInterval را متوقف میکنیم
      setIsActive(false)//غیرفعال کردن تایمر
    }
    return () => clearInterval(interval)
  }, [isActive, seconds])

  // دقیقه های باقیمانده را بر اساس ثانیه های باقی مانده محاسبه کنید
  const min = Math.floor(seconds / 60)

  // ثانیه های باقیمانده را بر اساس ثانیه های باقی مانده محاسبه کنید
  const secRemaining = ( seconds) % 60

  // یک شی حاوی دقیقه ها، ثانیه ها و عملکردهای فعلی برای شروع، توقف و تنظیم مجدد تایمر را برگردانید.
  return {
    min,
    sec: secRemaining,
    isEnd: seconds === 0,
    start,
    stop,
    reset,
  }
}

export default useCountdown