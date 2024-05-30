import EncryptDecrypt from "@functions/EncryptDecrypt";
import axios, { AxiosInstance } from "axios";


const instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL,
    timeout: import.meta.env.VITE_APP_TIME_OUT,
    headers: {
        Authorization: `Bearer ${EncryptDecrypt.decrypt(localStorage.getItem("accessToken") as string)}`
    }
})

export default instance