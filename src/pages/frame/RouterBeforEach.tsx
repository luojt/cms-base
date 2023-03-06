import React, {useEffect, useState} from 'react'
import {useNavigate, useLocation, Outlet} from 'react-router-dom'
import {isLogin} from '../../utils/token'
import {checkRouterAuth} from './utils'


const RouterBeforeEach = () => {
    const navigate = useNavigate()
    const [loginState, setLoginState] = useState(false)
    const location = useLocation()
    useEffect(() => {
        /*if (utils.exenv.isMobileDevice()) {
            return navigate('/nonsupport', { replace: true });
        }*/
        const obj = checkRouterAuth(location.pathname)
        if (!isLogin()) {
            return navigate('/login')
        }
        if (obj.path === '/login' || obj.path === '/') {
            navigate('/home')
        }
        setLoginState(true)
    }, [])
    return loginState ? <Outlet/> : null
}

export default RouterBeforeEach
