import axios from "axios";

//所以分类
let all = (params) => axios.get('/category/all', {params});



export default {
    all,
}