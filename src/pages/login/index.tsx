import React, { useCallback } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import './style.less';

import title from '@/assets/images/title_login.png';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
};

const Login = () => {
    const history = useHistory();
    const handleLogin = useCallback(async (data) => {
        console.log(data);
        Cookies.set('token', '111');
        const res = await axios.get('/data/data.json');
        history.push('/main');
        console.log(res);
    }, []);

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="login-container">
            <div className="login-content">
                <img src={title} className="login-title" />
                <div className="login-form">
                    <div className="login-form-title">登录</div>
                    <Form
                        {...layout}
                        initialValues={{ remember: true }}
                        onFinish={handleLogin}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            labelAlign="left"
                            className="login-form-item"
                            style={{ marginTop: 50, }}
                            rules={[{ required: true, message: '请输入用户名' }]}>
                            <Input placeholder="请输入用户名" bordered={false} />
                        </Form.Item>
                        <Form.Item
                            label="登录密码"
                            name="password"
                            labelAlign="left"
                            className="login-form-item"
                            rules={[{ required: true, message: '请输入密码' }]}
                        >
                            <Input.Password placeholder="请输入密码" bordered={false} />
                        </Form.Item>
                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>记住账号</Checkbox>
                        </Form.Item>
                        <Form.Item style={{marginTop: 120}} wrapperCol={{ span: 24 }}>
                            <Button block type="primary" size="large" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div >
    );
};
export default Login;