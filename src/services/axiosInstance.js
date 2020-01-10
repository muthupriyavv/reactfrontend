import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "http://localhost:3301/"
})

export default axiosInstance;