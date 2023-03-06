import {Button, ConfigProvider} from 'antd'
import React from 'react'

const Home: React.FC = () => {

    return (
        <div
            className="dis-fl jc-sb fd-c">
            <div
                style={{
                    width: '500px',
                    fontSize: '80px',
                    fontWeight: 'bold',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-10%, -10%)'
                }}>
                <p>欢迎进入首页</p>
            </div>
        </div>
    )
}

export default Home
