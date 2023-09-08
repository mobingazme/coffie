
import axios from 'axios'

import { ApiConstants } from '@/constants/constants';
import Cookies from 'js-cookie'






const NordesBackEnd = axios.create()


NordesBackEnd.defaults.baseURL = ApiConstants.baseUrl
NordesBackEnd.defaults.timeout = ApiConstants.timeOut;
NordesBackEnd.defaults.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin':'*',
    Authorization: 'Bearer ' + Cookies.get('token'),
}

NordesBackEnd.setToken = (token) =>{
    NordesBackEnd.defaults.headers ={
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Bearer ' + token,
    }
}


NordesBackEnd.interceptors.response.use(
    (response) =>{
        return response
    },
    (err) =>{
        return Promise.reject(err)
    }
)



export default NordesBackEnd