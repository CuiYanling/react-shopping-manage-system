import {Card, Table, Image, Button, Space} from 'antd';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import {useState, useEffect} from 'react'
import {Goods} from '../../../api';

function List() {
    //初始化一个空数组  及  修改空数组的函数
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        document.title = "商品列表";

        // 加载列表
        async function loadList() {
            let {status, data} = await Goods.list();
            if (status) {
                setDataSource([...data]);
            }
        }

        loadList();

        return () => {
            document.title = "商城后台管理系统";
        }
        //    空数组，只执行一次
    }, [])

    const columns = [
        {title: '#', dataIndex: 'id',},
        {
            title: '商品图片', dataIndex: 'img_md',
            render: (text, record, index) => {
                return <Image
                    width={100}
                    src={text}
                />
            }
        },
        {title: '商品名称', dataIndex: 'name',},
        {title: '价格', dataIndex: 'price',},
        {title: '库存', dataIndex: 'inventory',},
        {title: '发布时间', dataIndex: 'create_time', key: 'last_login_time'},
        {
            title: '操作', dataIndex: 'action',
            render: (text, record, index) => {
                return (
                    <Space>
                        <Button type="primary" icon={<EditOutlined/>} ghost>编辑</Button>
                        <Button icon={<DeleteOutlined/>} danger>删除</Button>
                    </Space>
                )
            }
        },
    ];

    return (
        <Card title="商品列表">
            <Table dataSource={dataSource} columns={columns} rowKey="id" bordered/>
        </Card>
    )
}

export default List;