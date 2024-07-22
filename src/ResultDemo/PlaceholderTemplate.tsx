import React from 'react';
import { Skeleton, Card } from 'antd';

const PlaceholderTemplate: React.FC = () => (
    <Card style={{ width: 300, marginTop: 16 }}>
        <Skeleton loading={true} avatar active>
            <Card.Meta
                avatar={<Skeleton.Avatar active />}
                title={<Skeleton.Input style={{ width: 200 }} active />}
                description={<Skeleton.Input style={{ width: 250 }} active />}
            />
        </Skeleton>
    </Card>
);

export default PlaceholderTemplate;
