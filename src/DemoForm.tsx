import React from 'react';
import { Form, Input, Button } from 'antd';

const DemoForm = () => {
    return (
        <Form>
            <Form.Item
                name="username"
                label="Username"
                rules={[{ required: true, message: 'Username is required' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                shouldUpdate={(prevValues, currentValues) => prevValues.username !== currentValues.username}
            >
                {({ getFieldValue }) => {
                    const isUsernameFilled = !!getFieldValue('username');
                    return (
                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[{ required: isUsernameFilled, message: 'Password is required' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                    );
                }}
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default DemoForm;
