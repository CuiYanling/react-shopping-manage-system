import { Card } from 'antd';
import { useEffect } from 'react'

function Edit() {
    useEffect(() => {
        document.title = "编辑商品";
        return () => {
            document.title = "商城后台管理系统";
        }
    });

    return (
        <Card title="编辑商品">

        </Card>
    )
}

export default Edit;