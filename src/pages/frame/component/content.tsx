import React, {Suspense} from 'react'
import {Layout, Spin} from 'antd'
import '../index.less'
import RouterBeforeEach from '../RouterBeforEach'

const ContentLayout: React.FC = () => {
    return (
        <Layout.Content className="dis-fl fd-c" style={{marginRight: 16}}>
            <Suspense
                fallback={
                    <div className="dis-fl jc-ct ai-ct" style={{height: '100vh'}}>
                        <Spin size="large"/>
                    </div>
                }
            >

                <RouterBeforeEach/>
            </Suspense>
        </Layout.Content>
    )
}

export default ContentLayout
