import {lazy} from 'react'

const Home = lazy(() => import(/* webpackChunkName: 'data' */ '../../pages/home'))
const Error = lazy(() => import(/* webpackChunkName: 'error' */ '../../pages/404/index'))
const Test = lazy(() => import(/* webpackChunkName: 'error' */ '../../pages/test'))

const SystemAccount = lazy(() => import(/* webpackChunkName: 'SystemAdmin' */ '../../pages/system/account'))
const Permission = lazy(() => import(/* webpackChunkName: 'SystemAdmin' */ '../../pages/system/permission'))

const routerList = [
    {
        path: "/login",
        component: lazy(() => import('../login')),
        auth: false
    },
    {
        path: "/",
        component: lazy(() => import('../frame')),
        auth: true,
        keepAlive:true,
        children: [
            {
                path: '/home',
                component: Home,
                auth: true,
                keepAlive:true
            },
            {
                path: '/404',
                component: Error,
                auth: false,
                keepAlive:true
            },
            {
                path: '/test',
                component: Test,
                auth: true,
                keepAlive:true
            },
            {
                path: '/system-account',
                component: SystemAccount,
                auth: true,
                keepAlive:true
            },
            {
                path: '/system-permission',
                component: Permission,
                auth: true,
                keepAlive:true
            }

        ]
    }

]

export default routerList
