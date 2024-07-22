import React from 'react';
import { useCreateUserMutation } from '../generated/graphql';
import { Form, Input, Button, message } from 'antd';

const { Item } = Form;

const CreateUserForm: React.FC = () => {
    const [createUser, { data, loading, error }] = useCreateUserMutation();

    const onFinish = (values: {
        name: string;
        email: string;
        username: string;
        phone: string;
        website: string;
    }) => {
        createUser({
            variables: {
                input: {
                    name: values.name,
                    email: values.email,
                    username: values.username,
                    phone: values.phone,
                    website: values.website,
                },
            },

        });
    };

    if (error) {
        message.error(error.message);
    }

    if (data) {
        message.success(`User created: ${data.createUser?.name}`);
    }

    return (
        <div>
            <h2>Create a New User</h2>
            <Form
                name="create-user"
                onFinish={onFinish}
                layout="vertical"
                style={{ maxWidth: '500px', margin: '0 auto' }}
            >
                <Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input the name!' }]}
                >
                    <Input />
                </Item>
                <Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input the email!' }]}
                >
                    <Input />
                </Item>
                <Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input the username!' }]}
                >
                    <Input />
                </Item>
                <Item
                    label="Phone"
                    name="phone"
                    rules={[{ required: true, message: 'Please input the phone number!' }]}
                >
                    <Input />
                </Item>
                <Item
                    label="Website"
                    name="website"
                    rules={[{ required: true, message: 'Please input the website!' }]}
                >
                    <Input />
                </Item>
                <Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </Button>
                </Item>
            </Form>
        </div>
    );
};

export default CreateUserForm;
