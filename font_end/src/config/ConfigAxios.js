import axios from "axios";
const instance = axios.create({
    baseURL: "http://localhost:8080/"
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    // gắn token vào header
    let token = window.localStorage.getItem('token');
    config.headers = {
        Authorization: token ? `Bearer ${token}` : null
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default instance