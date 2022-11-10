import { Avatar, Card, Descriptions, Tag } from 'antd';

function Info() {
    return (
        <Card title="账户信息">
            <Descriptions column={1} bordered>
                <Descriptions.Item label="账户">admin</Descriptions.Item>
                <Descriptions.Item label="姓名">黄小米</Descriptions.Item>
                <Descriptions.Item label="性别">女</Descriptions.Item>
                <Descriptions.Item label="手机">15863008280</Descriptions.Item>
                <Descriptions.Item label="角色">
                    <Tag color="magenta">超级管理员</Tag>
                </Descriptions.Item>
                <Descriptions.Item label="头像">
                    <Avatar size="large" src="https://joeschmoe.io/api/v1/random"/>
                </Descriptions.Item>
            </Descriptions>
        </Card>
    )
}

export default Info;