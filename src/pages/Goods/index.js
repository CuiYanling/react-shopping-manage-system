import { Route, Routes } from "react-router-dom";
// 导入页面级组件
import Category from './Category';
import Edit from './Edit';
import List from "./List";
import Release from './Release';

function Goods() {
    return (
        //配置路由
        <Routes>
            <Route path='category' element={<Category/>}/>
            <Route path='edit' element={<Edit/>}/>
            <Route path='list' element={<List/>}/>
            <Route path='release' element={<Release/>}/>
        </Routes>
    )
}

export default Goods;