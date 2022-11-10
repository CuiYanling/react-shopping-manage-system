import axios from 'axios';

//配置BaseURL
axios.defaults.baseURL = 'http://localhost:3003';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前添加token
    let token = sessionStorage.token;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx状态码，抽取后台返回的data。
    return response.data;
}, function (error) {
    // 处理错误状态码
    return Promise.reject(error);
});