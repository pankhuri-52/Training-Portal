
import React from 'react';
import { Form, Input, Button, Layout } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';
import './register.scss';

const layout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 16
    }
};

const Register = () => {
    const onFinish = async (values) => {

        console.log('Success:', values);
        const response = await axios.post('http://localhost:9000/api/register',values);
        if(response.data.message === 'success'){
            console.log('Successful');
        } else {
            console.log('error');
        }
    //     res.send(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (

    <div className="main">
        
        {/* Division for image */}
        <div className="picture-div">
            <img src={require('../../assets/images/main-wallpaper.jpg')} 
                 alt = 'Main Background'/>
        </div>

         {/* Division for Candidate Login */}
        <div className="login-div">
        <Layout className='form-layout'>
             <Layout className="header-section">
                <h3 className="header-text">Register</h3>
            </Layout>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className='form'
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Name!',
                        },
                        ]}
                        className='input-area'
                    >
                        <Input className='input'/>
                    </Form.Item>
                    <Form.Item
                        label="Email Id"
                        name="email"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your email id!',
                        },
                        ]}
                        className='input-area'
                    >
                        <Input className='input'/>
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                        className='input-area'
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item className='register-btn'>
                        <Button type="primary" htmlType="submit" className='button'>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Layout>
        </div>
    </div>
            
    );
};

export default Register;