import React from 'react';
import { Result as XYZ, Button } from 'antd';

const ResultDemoApp: React.FC = () => (
    <div style={{ padding: 24 }}>
        <XYZ
            status="warning"
            title="There are some problems with your operation."
            extra={
                <Button type="primary">
                    Go Console
                </Button>
            }
        />
    </div>
);

export default ResultDemoApp