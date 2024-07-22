import React from 'react';
import { useUsersQuery } from '../generated/graphql';
import { List, Typography, Spin, Alert } from 'antd';

const { Title } = Typography;

const UserList: React.FC = () => {
    const { data, loading, error } = useUsersQuery();

    if (loading) return <Spin size="large" />;
    if (error) return <Alert message="Error" description={error.message} type="error" />;

    const users = data?.users?.data ?? [];

    return (
        <div>
            <Title level={2}>User List</Title>
            <List
                dataSource={users}
                renderItem={(user) => (
                    <List.Item key={user?.id}>
                        <List.Item.Meta
                            title={user?.name}
                            description={`${user?.username} - ${user?.email}`}
                        />
                        <div>
                            <p>{user?.phone}</p>
                            <p>{user?.website}</p>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default UserList;
