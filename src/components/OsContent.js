import React from 'react';
import illustration from "../Illustration.png";
import {Button, Card, Checkbox, Col, Form, Input, Row} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

const OsContent = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (

        <div>
            <Row justify="space-between">
                <Col lg={12} >

                    <div>
                        <Card className="bg-gray-200">
                            <Row >
                                <Col lg={12}>
                                    <Form lg={8} name="normal_login" className="login-form" initialValues={{remember: true}} onFinish={onFinish}>
                                        <Form.Item
                                            name="username"
                                            rules={[{required: true, message: 'Please input your Username!'}]}
                                        >
                                            <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                                   placeholder="Username"/>
                                        </Form.Item>
                                        <Form.Item
                                            name="password"
                                            rules={[{required: true, message: 'Please input your Password!'}]}
                                        >
                                            <Input
                                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                                type="password"
                                                placeholder="Password"
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                                <Checkbox>Remember me</Checkbox>
                                            </Form.Item>

                                            <a className="login-form-forgot float-right" href="">
                                                Forgot password
                                            </a>
                                        </Form.Item>

                                        <Form.Item>
                                            <Button block type="primary" htmlType="submit" className="login-form-button">
                                                Log in
                                            </Button>
                                            Or <a href="">register now!</a>
                                        </Form.Item>
                                    </Form>

                                </Col>
                                <Col lg={12}>
                                    <img lg={3} src={illustration} alt="img"/>
                                </Col>

                            </Row>

                        </Card>
                    </div>
                </Col>
                <Col lg={12}>col-4</Col>


            </Row>
        </div>
    );
}

export default OsContent;
