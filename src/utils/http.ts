import axios, { AxiosInstance } from "axios";
import { message } from 'antd'
const http:AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
})

http.interceptors.request.use((config) => {
    return config
})

http.interceptors.response.use((response) => {
    const res = response.data;
    if(res.code !== 200) {        
        message.error(res.code + ':' + res.message)
        return Promise.reject(new Error(res.message))
    }
    return res
})

export default http;