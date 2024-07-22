import React, { useState, useEffect } from 'react';
import { List, Avatar } from 'antd';
import PlaceholderTemplate from './PlaceholderTemplate';

interface User {
    id: number;
    name: string;
    avatar: string;
}

const PlaceholderTemplateDemo: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        // Simulate fetching data
        setTimeout(() => {
            setData([
                {
                    id: 1,
                    name: 'John Doe',
                    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
                },
            ]);
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div style={{ padding: 24 }}>
            {loading ? (
                <div>
                    <PlaceholderTemplate />
                    <PlaceholderTemplate />
                    <PlaceholderTemplate />
                </div>
            ) : (
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={item.name}
                            />
                        </List.Item>
                    )}
                />
            )}
        </div>
    );
};

export default PlaceholderTemplateDemo;
