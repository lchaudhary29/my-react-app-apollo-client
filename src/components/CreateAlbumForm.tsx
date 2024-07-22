import React, { useState } from 'react';
import { useCreateAlbumMutation } from '../generated/graphql';
import { Form, Input, Button, message } from 'antd';
import { ApolloProvider } from '@apollo/client';
import client from '../apolloClient';

const { Item } = Form;

const CreateAlbumForm: React.FC = () => {
    const [createAlbum, { data, loading, error }] = useCreateAlbumMutation();

    const onFinish = (values: { title: string }) => {
        createAlbum({
            variables: {
                input: {
                    title: values.title,
                    userId: '1', // Example user ID
                },
            },
        });
    };

    if (error) {
        message.error(error.message);
    }

    if (data) {
        message.success(`Album created: ${data.createAlbum.title}`);
    }

    return (
        <ApolloProvider client={client}>
            <div>
                <h2>Create a New Album</h2>
                <Form
                    name="create-album"
                    onFinish={onFinish}
                    layout="vertical"
                    style={{ maxWidth: '400px', margin: '0 auto' }}
                >
                    <Item
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: 'Please input the title!' }]}
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
        </ApolloProvider>
    );
};

export default CreateAlbumForm;
