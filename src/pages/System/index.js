import { Route, Routes } from "react-router-dom";
// 导入页面级组件
import Menu from './Menu';
import Role from './Role';
import UserList from './User/List';
import UserEdit from './User/Edit';

function System() {
    return (
        <Routes>
            <Route path='menu' element={<Menu/>}/>
            <Route path='role' element={<Role/>}/>
            <Route path='user/list' element={<UserList/>}/>
            <Route path='user/edit/:id' element={<UserEdit/>}/>
        </Routes>
    )
}

export default System;