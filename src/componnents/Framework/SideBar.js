import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function SideBar() {
    const menus = [
        {
            label: '商品管理',
            key: 'item-1',
            children: [
                { label: (<Link to="/goods/category">商品分类</Link>), key: 'submenu-1-1' },
                { label: (<Link to="/goods/release">发布商品</Link>), key: 'submenu-1-2' },
                { label: (<Link to="/goods/list">商品列表</Link>), key: 'submenu-1-3' },
            ],
        },
        {
            label: '订单管理',
            key: 'item-2',
            children: [
                { label: (<Link to="/order/list">订单列表</Link>), key: 'submenu-2-1' },
            ],
        },
        {
            label: '用户管理',
            key: 'item-3',
            children: [
                { label: (<Link to="/user/list">用户列表</Link>), key: 'submenu-3-1' },
            ],
        },
        {
            label: '系统管理',
            key: 'item-4',
            children: [
                { label: (<Link to="/system/user/list">管理员</Link>), key: 'submenu-4-1' },
                { label: (<Link to="/system/role">角色管理</Link>), key: 'submenu-4-2' },
                { label: (<Link to="/system/menu">菜单管理</Link>), key: 'submenu-4-3' },
            ],
        },
        {
            label: '账户设置',
            key: 'item-5',
            children: [
                { label: (<Link to="/account/info">账户信息</Link>), key: 'submenu-5-1' },
            ],
        },
    ];
    return (
        //theme='dark'颜色     mode="inline"折叠方式   defaultOpenKeys={['1']}默认打开的菜单
        <Menu mode="inline" theme="dark" defaultOpenKeys={['item-1']} items={menus}/>
    )
}

export default SideBar;