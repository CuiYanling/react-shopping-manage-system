//导入布局
import {Layout} from 'antd';
// 占位符
import {Outlet} from "react-router-dom";
//侧边栏
import SiderBar from "./SideBar";
import NavBar from "./NavBar";
import styles from './index.module.css';
//布局
const {Header, Sider, Content} = Layout;

function Framework() {
    return (
        <Layout>
            <Header className={styles.header}>
                <NavBar></NavBar>
            </Header>
            <Layout>
                <Sider className={styles.side_bar}>
                    <SiderBar></SiderBar>
                </Sider>
                <Content className={styles.content}>
                    {/*outlet相当于一个占位符*/}
                    <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>
    )
}


export default Framework;