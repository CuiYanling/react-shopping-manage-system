import {useEffect, useState} from "react";
import {Admin} from "../../../api";
import {Link} from 'react-router-dom';
import {Button, Card, Image, Space, Table, Tag, message, Popconfirm} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

function User() {
    //初始化一个空数组  及  修改空数组的函数
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        document.title = "管理员列表";

        // 加载列表
        async function loadList() {
            let {status, data} = await Admin.list();
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

    //删除按钮：
    const confirm = (e) => {
        message.success('删除成功！');
        console.log(dataSource);
        console.log(e);
    }
    const oncancel = () => {
        message.info('取消成功！');
    }


    const columns = [
        {title: '#', dataIndex: 'id',},
        {
            title: '头像', dataIndex: 'avatar',
            render: (text, record, index) => {
                return <Image
                    width={100}
                    src={text}
                />
            }
        },
        {title: '账户', dataIndex: 'username',},
        {title: '姓名', dataIndex: 'fullname',},
        {title: '性别', dataIndex: 'sex',},
        {title: '手机', dataIndex: 'tel',},
        {
            title: '角色',
            dataIndex: 'role_name',
            render: (text, record, index) => {
                // console.log(text, record, index)
                return (
                    <Tag color="blue">{text}</Tag>
                )
            }
        },
        {
            title: '操作', dataIndex: 'action',
            render: (text, record, index) => {
                return (
                    <Space>
                        <Link to={`/system/user/edit/${record.id}`}>
                            <Button type="primary" icon={<EditOutlined/>} ghost>编辑</Button>
                        </Link>
                        <div style={{whiteSpace: 'nowrap'}}>
                            <Popconfirm
                                title={"确定删除此项嘛？"}
                                onConfirm={confirm}
                                onCancel={oncancel}
                                okText="确定"
                                cancelText="取消"
                            >
                                <Button icon={<DeleteOutlined/>} danger>删除</Button>
                            </Popconfirm>
                        </div>
                    </Space>
                )
            }
        },
    ];

    return (
        <Card title="管理员列表">
            <Table dataSource={dataSource} columns={columns} rowKey="id" bordered/>
        </Card>
    )
}


export default User;