//使用路由的前提：导入：
import {Route, Routes} from "react-router-dom";
// 导入页面级组件
import List from "./List";

function User() {
    return (
        <Routes>
            <Route path='list' element={<List/>}/>
        </Routes>
    )
}

export default User;