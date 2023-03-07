import {Navigate, useLocation, useNavigate} from 'react-router-dom'
import {isLogin} from '../../utils/token'
import {checkRouterAuth} from '../../pages/frame/utils'


export function RequireAuth({children}: { children: JSX.Element }) {
    const location = useLocation()
    const navigate = useNavigate()
    const obj = checkRouterAuth(location.pathname)
    console.log('RequireAuth:'+obj.path)
    if (obj.path !== '/login' && !isLogin()) {
         // navigate('/login')
        return <Navigate to="/login" state={{from: location}} replace/>
    }
    if ((obj.path === '/login' || obj.path === '/') && isLogin()) {
        // return navigate('/home')
        return <Navigate to="/home" state={{from: location}} replace/>
    }
    return children
}
