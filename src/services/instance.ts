import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL,
    timeout: import.meta.env.VITE_APP_TIME_OUT
})

export default instance