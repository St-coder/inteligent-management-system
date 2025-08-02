import logo from "../../assets/logo.png"
import bg from "../../assets/bg.jpg"
import lgbg from "../../assets/lgbg.jpg"
import './index.scss'
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from "../../api/users";
import { useDispatch } from "react-redux";
import { setToken, setUserInfo } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = function () {
    const [form] = Form.useForm()
    const dispatch =  useDispatch()
    const navigate = useNavigate()

    const [loading, setLoading] = useState<boolean>(false)
    // 自定义校验规则
    const usernameValidator = (_: any, value: string) => {
        if (/\s/.test(value)) {
            return Promise.reject('用户名不能包含空格');
        }
        return Promise.resolve();
    };
    const passwordValidator = (_: any, value: string) => {
        if (value && value.length < 6) {
            return Promise.reject('密码至少需要6位');
        }
        return Promise.resolve();
    };


    const handleLogin = () => {
        form.validateFields().then(data => {
            console.log(data, '表单值');
            setLoading(true)
            login(data)
                .then(res => {
                    console.log(res);
                    dispatch(setToken(res.data.token))
                    dispatch(setUserInfo(res.data))
                    setLoading(false)

                    navigate('/dashboard', {replace: true})
                }).catch(err => {
                    setLoading(false)
                    console.log('err', err);
                })

        }).catch(err => {
            console.log(err, 7);
        })
    }


    return <>
        <div className="login-wrapper" style={{ backgroundImage: `url(${bg})` }}>
            <div className="lgbg" style={{ backgroundImage: `url(${lgbg})` }}>
                <div className="part">
                    <div className="title">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <h1>朋远智慧园区管理平台</h1>
                    </div>

                    <Form
                        name="basic"
                        wrapperCol={{ span: 24 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                        form={form}
                        validateTrigger={['onSubmit', 'onBlur']}
                    >
                        <Form.Item
                            name="userName"
                            rules={[
                                { required: true, message: '请输入用户名' },
                                { validator: usernameValidator },// 新增自定义校验
                            ]}
                        >
                            <Input placeholder="请输入用户名" prefix={<UserOutlined />} autoComplete="username" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                { required: true, message: '请输入密码' },
                                { validator: passwordValidator },// 新增自定义校验
                            ]}
                        >
                            <Input.Password placeholder="请输入密码" prefix={<LockOutlined />} autoComplete="current-password" />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                            <Button type="primary" htmlType="submit" style={{ width: '100%' }} loading={loading} onClick={handleLogin}>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>




                </div>

            </div>
        </div>
    </>
}

export default Login;