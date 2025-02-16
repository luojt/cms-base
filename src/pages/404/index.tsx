import React from 'react'
import {Button, Row, Col} from 'antd'
import errorImg from '../../assets/images/404.png'
import './index.less'
import {useNavigate} from 'react-router-dom'

const Error: React.FC = () => {
    const navigate = useNavigate()
    return (
        <Row className="not-found">
            <Col span={12}>
                <img src={errorImg} alt="404"/>
            </Col>
            <Col span={12} className="right">
                <h1>404</h1>
                <h2>抱歉，你访问的页面不存在</h2>
                <div>
                    <Button type="primary" onClick={() => navigate('/home')}>
                        回到首页
                    </Button>
                </div>
            </Col>
        </Row>
    )
}

export default Error
