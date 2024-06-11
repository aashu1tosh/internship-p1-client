import EncryptDecrypt from "@functions/EncryptDecrypt";
import axios, { AxiosInstance } from "axios";


const instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL,
    timeout: import.meta.env.VITE_APP_TIME_OUT,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
instance.interceptors.request.use(async (config: any) => {
    const token = EncryptDecrypt.decrypt(localStorage.getItem("accessToken") as string) ||
        EncryptDecrypt.decrypt(sessionStorage.getItem("accessToken") as string);
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default instance