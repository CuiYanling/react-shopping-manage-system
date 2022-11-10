import {Route, Routes} from "react-router-dom";

import Info from "./Info";
import Edit from "./Edit";

function Account() {
    return (
        <Routes>
            <Route path='info' element={<Info/>}></Route>
            <Route path='edit' element={<Edit/>}></Route>
        </Routes>
    )
}

export default Account;