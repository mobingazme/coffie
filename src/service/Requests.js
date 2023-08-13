import { ApiVersions } from "@/constants/constants"
import NordesBackEnd from "./Api"



export const sendOtpRequest = async (
    params ={
        type : 'phone',
        minute: 5,
        exists: 2,
    }
)=> {
    return await NordesBackEnd.post(ApiVersions.v1 + '/otp',params)
}




export const loginByPhoneAndPassRequest = async (
    params ={
        phone: '',
        code : '',
    }
)=>{
    return await NordesBackEnd.post(ApiVersions.v1 + '/login_register',params)
}

export const registerByPhoneAndPassRequest = async (
    params ={
      phone: '',
        code : '',
       
    }
    ) => {
        return await NordesBackEnd.post(ApiVersions.v1 + 'login_register', params)
    }

    export const getProfileRequest = async () => {
        return await NordesBackEnd.get(ApiVersions.v1 + '/user')
    }


