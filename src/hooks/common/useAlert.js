import Swal from "sweetalert2"

const useAlert = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })

  return {
    success: (message) => {
      Toast.fire({
        icon: 'success',
        title: message,
      })
    },
    warning: (message) => {
      Toast.fire({
        icon: 'warning',
        title: message,
      })
    },
    error: (message) => {
      Toast.fire({
        icon: 'error',
        title: message,
      })
    },
    info: (message) => {
      Toast.fire({
        icon: 'info',
        title: message,
      })
    },
    question: (message) => {
      Toast.fire({
        icon: 'question',
        title: message,
      })
    },
  }
}

export default useAlert
