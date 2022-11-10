import {Avatar, Button, Col, Image, Menu, Row, Space} from 'antd'
import {MenuFoldOutlined} from '@ant-design/icons'
//图片需要导入
import Logo from './img/logo.png';

function NavBar() {
    const menus = [
        {label: '预览商城', key: 'item-1'},
        {label: '系统配置', key: 'item-2'},
        {
            label: (
                <Space>
                    <Avatar src="https://joeschmoe.io/api/v1/random"/>
                    <span>黄小米</span>
                </Space>
            ),
            key: 'submenu',
            children: [
                {label: '消息通知', key: 'submenu-item-1'},
                {label: '账户设置', key: 'submenu-item-2'},
                {label: '退出登录', key: 'submenu-item-3'}
            ],
        },
    ];
    return (
        <Row justify="space-between">
            <Col>
                <Row justify="space-between" align="center">
                    <Col>
                        {/*图片 preview={false} 取消预览*/}
                        <Image src={Logo} width={180} preview={false}/>
                    </Col>
                    <Col>
                        {/*<MenuFoldOutlined/> 没有直接写图标，为了后续方便实现伸缩*/}
                        <Button icon={<MenuFoldOutlined/>} type="text" style={{color: "white"}}></Button>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Menu items={menus} mode="horizontal" theme="dark"/>
            </Col>
        </Row>
    )
}

export default NavBar;