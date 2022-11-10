import styles from './index.module.css';
//导入框架
import {Button, Checkbox, Card, Form, Input} from 'antd';
import {Link} from "react-router-dom";
// import React, {useState} from "react";


function Register() {
    // const [value, setValue] = useState(1);
    // const onChange = (e) => {
    //     console.log('radio checked', e.target.value);
    //     setValue(e.target.value);
    // };

    return (
        <div className={styles.bg}>
            <Card title="注册账户" className={styles.form_card}
                  actions={[<Link to='/'>登录账户</Link>, <Link to='./###'>忘记密码?</Link>]}>
                <Form labelCol={{span: 4}} wrapperCol={{span: 20}} autoComplete="off">
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

                    <Form.Item label="姓名" name="fullname"
                               rules={[
                                   {required: true, message: '请输入姓名!', trigger: 'blur'},
                                   {min: 1, max: 10, message: '姓名长度要求在1-10之间', trigger: 'blur'}
                               ]}
                    >
                        <Input/>
                    </Form.Item>

                    {/*<Form.Item label="性别" name="sex"*/}
                    {/*           rules={[*/}
                    {/*               {required: true, message: '请选择性别!', trigger: 'blur'},*/}
                    {/*           ]}*/}
                    {/*>*/}
                    {/*    <Radio.Group onChange={onChange} value={value}>*/}
                    {/*        <Radio value={1}>男</Radio>*/}
                    {/*        <Radio value={2}>女</Radio>*/}
                    {/*    </Radio.Group>*/}
                    {/*</Form.Item>*/}


                    <Form.Item label="手机" name="tel"
                               rules={[
                                   {required: true, message: '请输入手机号码!', trigger: 'blur'},
                                   {
                                       pattern: /^1(34[0-8]|705|(3[5-9]|5[0127-9]|8[23478]|78)\d)\d{7}$/,
                                       message: '手机号码不符合规则！',
                                       trigger: 'blur'
                                   }
                               ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item name="remember" wrapperCol={{offset: 4, span: 20}}>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 4, span: 20}}>
                        {/*htmlType="submit"  自动校验*/}
                        <Button type="primary" htmlType="submit">
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Register;