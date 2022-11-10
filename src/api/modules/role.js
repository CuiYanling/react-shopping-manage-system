import axios from 'axios';

// 列表
let list = (params) => axios.get('/role/list', { params });

export default {
    list,
}