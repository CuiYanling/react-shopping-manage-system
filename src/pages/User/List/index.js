import {Avatar, Button, Card, Space, Table, Tag} from 'antd';
import {EditOutlined, DeleteOutlined} from "@ant-design/icons";

function List() {
    const dataSource = [
        {
            id: 1,
            avatar: 'https://joeschmoe.io/api/v1/random',
            username: 'moz',
            fullname: '黄小米',
            sex: '女',
            tel: '15863008280',
            role_name: '超级管理员',
            last_login_time: '2022-10-24',
        },

    ];

    //列表：
    //Key可写可不写，写的话切记不要重名，可以设置与dataIndex相等
    const columns = [
        {
            title: '#',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '头像',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (text, record, index) => {
                // console.log(text, record, index)
                return (
                    <Avatar size={"large"} src={text}></Avatar>
                )
            }
        },
        {
            title: '账号',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: '姓名',
            dataIndex: 'fullname',
            key: 'fullname',
        },
        {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
        },
        {
            title: '手机',
            dataIndex: 'tel',
            key: 'tel',
        },
        {
            title: '角色',
            dataIndex: 'role_name',
            render: (text, record, index) => {
                // console.log(text, record, index)
                return (
                    <Tag color="orange">{text}</Tag>
                )
            }
        },
        {
            title: '上次登录',
            dataIndex: 'last_login_time',
        },
        {
            title: '操作',
            dataIndex: 'address',
            render: (text, record, index) => {
                // console.log(text, record, index)
                 return (
                    <Space>
                        {/*ghost 透明背景色 ，显示下一层颜色*/}
                        <Button type="primary" ghost icon={<EditOutlined/>}>编辑</Button>
                        <Button danger icon={<DeleteOutlined/>}>删除</Button>
                    </Space>
                )
            }
        },
    ];

    return (
        <Card title="用户列表">
            {/*rowKey="id" 代表key   解决Key报错*/}
            <Table dataSource={dataSource} columns={columns} rowKey="id" bordered/>
        </Card>
    )
}

export default List;