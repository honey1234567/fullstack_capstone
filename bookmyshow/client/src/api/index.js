import axios from "axios";
const BASE_URL = "http://localhost:3000/"
//react application will un on 300
export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }
});