import {Button, Card, Tree, Space, Table} from 'antd';
import {useEffect, useState} from 'react'
//API:
import {Category} from "../../../api";
//框架
import {DeleteOutlined, EditOutlined, PlusCircleOutlined} from "@ant-design/icons";
//CSS:
import styles from "./index.module.css";
import './tree.css';

function CategoryList() {
    //初始数据（扁平化的）
    let [initData, setInitData] = useState([]);

    useEffect(() => {
        document.title = "商品分类";

        // 加载列表_所有分类（初始分类flat类型）
        async function loadInitData() {
            let {status, data} = await Category.all({type: "flat"});
            // console.log(status, data);
            if (status) {
                //初始化数据（扁平结构）
                setInitData([...data]);
                //    转换数据类型：扁平化---》树形数据
                setTreeData(convert_to_tree(data));
            }
        }

        loadInitData();

        return () => {
            document.title = "商城后台管理系统";
        }

        //    空数组，只执行一次
    }, [])

    //转化后的树形数组
    let [treeData, setTreeData] = useState([]);

    //转换函数：扁平数组——》树形数组
    function convert_to_tree(origin) {
        //    查找一级分类
        let cate_1st = origin.filter((item) => item.pId === 0);
        // console.log(cate_1st);

        //    查找子集分类
        function convert(root) {
            return root.map((parent) => {
                //防止修改源数据：
                let copy = JSON.parse(JSON.stringify(parent));
                let children = origin.filter((child) => child.pId === parent.id);
                if (children.length) {
                    return {...copy, children: convert(children)};
                }
                return copy;
            });
        }

        return convert(cate_1st);
    }


    //对齐后台返回的属性（解决名字不对应的问题）
    let fileNames = {title: "name", key: "id"}

    //渲染节点的函数
    let handleTitleRender = (nodeData) => {
        // console.log(nodeData);
        return (
            <div className={styles.node}>
                <div className="name">{nodeData.name}</div>
                <div className="actions">
                    <Space>
                        <Button icon={<EditOutlined></EditOutlined>} type="link">编辑</Button>
                        <Button icon={<PlusCircleOutlined></PlusCircleOutlined>} type="link">添加</Button>
                        <Button icon={<DeleteOutlined></DeleteOutlined>} type="link" danger>删除</Button>
                    </Space>
                </div>
            </div>
        )
    }

    return (
        <Card title="商品分类">
            {/*showLine:连线 */}
            <Tree treeData={treeData} titleRender={handleTitleRender} showLine/>
        </Card>
    );

}

export default CategoryList;