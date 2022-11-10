import {Route, Routes} from "react-router-dom";

import List from "./List";

function Order() {
    return (
        <Routes>
            <Route path='list' element={<List/>}></Route>
        </Routes>
    )
}

export default Order;