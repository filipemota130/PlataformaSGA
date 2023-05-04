import axios from "axios";
import { config } from "process";
import { router } from "./routes";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosClient.interceptors.request.use((config): any => {
    const token = '123';
    config.headers.Authorization = `Bearer ${token}`;

    return config;
});

axiosClient.interceptors.response.use(response => {
    return response;
}) , (error: { response: { status: number; }; }) => {
    if (error.response && error.response.status === 401) {
        router.navigate('/')
        return error;
    }
    throw error;
}
export default axiosClient;