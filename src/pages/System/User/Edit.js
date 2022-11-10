import {useState, useEffect} from 'react';
import {Button, Card, Form, Input, Radio, Select, message} from 'antd';
//获取id参数的函数
import {useParams, useNavigate} from 'react-router-dom';
import {Admin, Role} from '../../../api/';
//上传头像组件
import SingleUpload from "../../../componnents/SingleUpload";

const {Option} = Select;

function Edit() {
    // 解构路由参数
    let {id} = useParams();
    // 获取 Form 实例对象
    let [form] = Form.useForm();
    //角色列表
    let [roleOptions, setRoleOptions] = useState([]);

    useEffect(() => {
        async function loadProfile() {
            // 加载角色列表
            //为了避免重名，重命名了
            let {status: role_status, data: role_list} = await Role.list();
            if (role_status) {
                setRoleOptions([...role_list]);
            }
            // 加载账户信息
            let {status: admin_status, data: admin_profile} = await Admin.profile({id});
            if (admin_status) {
                // 还原表单
                form.setFieldsValue({...admin_profile});
            }
        }

        loadProfile();

    }, [id]);

    //跳转页面,先初始化
    let navigate = useNavigate();
    //修改 保存资料
    let handleSubmit = async (formData) => {
        console.log(formData);
        let {status, msg} = await Admin.edit({...formData, id});
        if (status) {
            // 信息提示
            message.success(msg);
            // 跳转页面到管理员列表（上一个页面）
            navigate(-1, {replace: true});
        } else {
            message.error(msg);
        }
    }

    return (
        <Card title="编辑管理员">
            {/*name属性和返回的数据匹配！！！*/}
            <Form onFinish={handleSubmit} form={form} labelCol={{span: 2}} wrapperCol={{span: 22}}>
                <Form.Item label="用户名" name="username"
                           rules={[
                               {required: true, message: '请输入用户名称！'},
                               {type: 'string', min: 3, message: '请输入至少3个字符！'}
                           ]}>
                    <Input disabled/>
                </Form.Item>
                <Form.Item label="姓名" name="fullname"
                           rules={[
                               {required: true, message: '请输入您的姓名！'},
                               {type: 'string', min: 2, message: '请输入至少2个字符！'}
                           ]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="性别" name="sex"
                           rules={[{required: true, message: '请选择性别！'}]}>
                    <Radio.Group>
                        <Radio value="男">男</Radio>
                        <Radio value="女">女</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="角色" name="role_id"
                           rules={[{required: true, message: '请选择角色！'}]}>
                    <Select>
                        {
                            roleOptions.map((role, index) => {
                                return <Option key={role.id} value={role.id}>{role.name}</Option>
                            })
                        }
                    </Select>
                </Form.Item>
                <Form.Item label="手机" name="tel"
                           rules={[
                               {required: true, message: '请输入手机号码！'},
                               {pattern: /^1[3456789]\d{9}$/, message: '请输入11位手机号码！'}
                           ]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="邮箱" name="email"
                           rules={[
                               {required: true, message: '请输入电子邮件地址！'},
                               {
                                   pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                                   message: '请输入合法的电子邮件地址！'
                               }
                           ]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="头像" name="avatar"
                           rules={[{required: true, message: '请选择上传一张头像！'}]}>
                    {/*头像组件！！！*/}
                    <SingleUpload action={`${process.env.REACT_APP_HOST}/upload/common`}></SingleUpload>
                </Form.Item>
                <Form.Item wrapperCol={{offset: 2, span: 22}}>
                    <Button type="primary" htmlType="submit">
                        保存修改
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Edit;