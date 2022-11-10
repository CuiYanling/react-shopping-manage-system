import styles from './index.module.css';
//链接组件
import {Link, useNavigate} from "react-router-dom";
//导入框架
import {Button, Checkbox, Card, Form, Input, message} from 'antd';
//导入API
import {Admin} from "../../../api";

function Login() {
    // 初始化(跳转页面）
    let navigate = useNavigate();
    // 登录--发送ajax
    let handleSubmit = async (formData) => {
        let {status, msg, data} = await Admin.login(formData);
        // console.log(status, msg, data);
        if (status) {
            // 缓存数据
            sessionStorage.id = data.id;
            sessionStorage.role = data.role;
            sessionStorage.token = data.token;
            // 消息提示
            message.success(msg);
            // 跳转页面
            navigate('/goods/list');
        } else {
            // 消息提示
            message.error(msg);
        }
    }
    return (
        <div className={styles.bg}>
            <Card title="欢迎登录" className={styles.form_card}
                  actions={[<Link to='/register'>注册账户</Link>, <Link to='./###'>忘记密码?</Link>]}>
                <Form onFinish={handleSubmit} labelCol={{span: 4}} wrapperCol={{span: 20}} autoComplete="off">
                    <Form.Item label="账户" name="username"
                               rules={[
                                   {required: true, message: '请输入账号!', trigger: 'blur'},
                                   {min: 3, max: 20, message: '账户长度要求在3-20之间', trigger: 'blur'}
                               ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item label="密码" name="password"
                               rules={[
                                   {required: true, message: '请输入密码!', trigger: 'blur'},
                                   {pattern: /\d{3,}/, message: '密码长度要求至少3位数字', trigger: 'blur'}
                               ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item valuePropName="checked" wrapperCol={{offset: 4, span: 20}}>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 4, span: 20}}>
                        {/*htmlType="submit"  自动校验，触发事件*/}
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login;