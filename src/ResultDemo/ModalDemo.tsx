import React, { useState } from 'react';
import { Modal, Button, Form, Input, message } from 'antd';

const ModalDemo: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [isFormChanged, setIsFormChanged] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        form.validateFields()
            .then(values => {
                console.log('Form Values:', values);
                setIsModalVisible(false);
                setIsFormChanged(false);
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    const handleCancel = () => {
        if (isFormChanged) {
            Modal.confirm({
                title: 'Unsaved changes',
                content: 'You have unsaved changes. Are you sure you want to discard them?',
                onOk: () => {
                    setIsModalVisible(false);
                    setIsFormChanged(false);
                    form.resetFields();
                }
            });
        } else {
            setIsModalVisible(false);
        }
    };

    const onFormChange = () => {
        setIsFormChanged(true);
    };

    return (
        <div style={{ padding: 24 }}>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
                title="Form Modal"
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form
                    form={form}
                    onFieldsChange={onFormChange}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default ModalDemo;
