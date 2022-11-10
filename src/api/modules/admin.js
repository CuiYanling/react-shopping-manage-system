import axios from 'axios'

// 登录
let login = (data) => axios.post('/admins/login', data);

// 注册
let register = (data) => axios.post('/admins/register', data);

//System下的管理员列表
let list=(params)=>axios.get('./admins/list',{params});

// 账户信息
let profile = (params) => axios.get('/admins', { params });

// 修改账户信息
let edit = (data) => axios.put('/admins/', data);


export default {
    login,
    register,
    list,
    profile,
    edit,
}