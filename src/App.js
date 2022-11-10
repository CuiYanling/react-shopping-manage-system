import {HashRouter, Route, Routes} from "react-router-dom";
import './App.css';
//导入页面级组件
import Login from "./pages/Account/Login";
import Register from "./pages/Account/Register";
//导入公共框架
import Framework from "./componnents/Framework";
//导入模块组件
import Account from "./pages/Account";
import User from "./pages/User/";
import Goods from "./pages/Goods/";
import System from "./pages/System/";
import Order from "./pages/Order/";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<Framework/>}>
                    {/*只要是user开头的，都往这里拼，其余类似*/}
                    <Route path="/user/*" element={<User/>}/>
                    <Route path="/goods/*" element={<Goods/>}/>
                    <Route path="/system/*" element={<System/>}/>
                    <Route path="/order/*" element={<Order/>}/>
                    <Route path="/account/*" element={<Account/>}/>
                </Route>
                {/*只要匹配上，就不向下进行*/}
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Login/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
