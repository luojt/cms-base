import {lazy} from 'react'

const Home = lazy(() => import(/* webpackChunkName: 'data' */ '../../pages/home'))
const Error = lazy(() => import(/* webpackChunkName: 'error' */ '../../pages/404/index'))
const Test = lazy(() => import(/* webpackChunkName: 'error' */ '../../pages/test'))

const SystemAccount = lazy(() => import(/* webpackChunkName: 'SystemAdmin' */ '../../pages/system/account'))
const Permission = lazy(() => import(/* webpackChunkName: 'SystemAdmin' */ '../../pages/system/permission'))
const Login = lazy(() => import('../login'))
const Frame = lazy(() => import('../frame'))


const routerList = [
    {
        path: '/login',
        component: <Login/>
    },
    {
        path: '/',
        component: <Frame/>,
        keepAlive: false,
        children: [
            {
                path: '/home',
                component: <Home/>,
                keepAlive: true
            },
            {
                path: '/404',
                component: <Error/>,
                keepAlive: true
            },
            {
                path: '/test',
                component: <Test/>,
                keepAlive: true
            },
            {
                path: '/system-account',
                component: <SystemAccount/>,
                keepAlive: true
            },
            {
                path: '/system-permission',
                component: <Permission/>,
                keepAlive: true
            }
        ]
    }

]

export default routerList
