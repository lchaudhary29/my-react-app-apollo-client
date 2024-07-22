import { Flex } from 'antd'
import React from 'react'

function FlexDemo() {

    return (
        <>

            <Flex justify={'center'}>
                <div style={{ background: '#f0f0f0', padding: 16 }}>Item 1</div>
                <div style={{ background: '#f0f0f0', padding: 16 }}>Item 2</div>
                <div style={{ background: '#f0f0f0', padding: 16 }}>Item 3</div>
            </Flex>

        </>

    )
}

export default FlexDemo