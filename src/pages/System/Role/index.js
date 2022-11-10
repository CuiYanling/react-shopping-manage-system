import { Avatar, Button, Card, Space, Table, Tag } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

function Role() {
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

    const columns = [
        { title: '#', dataIndex: 'id', },
        { title: '姓名', dataIndex: 'fullname', },
        {
            title: '角色', dataIndex: 'role_name',
            render: (text, record, index) => {
                return <Tag color="orange">{text}</Tag>
            }
        },
        { title: '创建时间', dataIndex: 'last_login_time', key: 'last_login_time' },
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
        <Card title="角色列表">
            <Table dataSource={dataSource} columns={columns} rowKey="id" bordered/>
        </Card>
    )
}

export default Role;