import axios, { AxiosInstance } from "axios";
const http:AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
})

http.interceptors.request.use((config) => {
    return config
})

http.interceptors.response.use((response) => {
    return response
})

export default http;