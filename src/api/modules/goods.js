import axios from 'axios';

// 列表
let list = (params) => axios.get('/seller/goods/list', { params });

//获取商品分类
let category=(params)=>axios.get('/category/all',{params});

export default {
    list,
    category,
}