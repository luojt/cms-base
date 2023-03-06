import React, {Suspense} from 'react'
import KeepAlive from 'react-activation'
import routerList from './list'

// 路由处理方式
const generateRouter = (routers: any[]) => {
    return routers.map((item) => {
        if (item.children) {
            item.children = generateRouter(item.children)
        }

        if (item.keepAlive) {
            console.log(item.path+':'+item.keepAlive)
            item.element = <KeepAlive saveScrollPosition="screen"><Suspense fallback={
                <div>加载中</div>
            }>
                {/* 把懒加载的异步路由变成组件装载进去 */}
                <item.component/>
            </Suspense></KeepAlive>

        } else {
            item.element = <Suspense fallback={
                <div>加载中</div>
            }>
                {/* 把懒加载的异步路由变成组件装载进去 */}
                <item.component/>
            </Suspense>
        }
        return item
    })
}

const checkRouterAuth = (path:string) => {
    return checkAuth(routerList, path) || null
}
// 根据路径获取路由
const checkAuth = (routers:any[], path:string) => {
    for (const data of routers) {
        if (data.path === path) return data
        if (data.children) {
            const res: any = checkAuth(data.children, path)
            if (res) return res
        }
    }
    return null
}
export {generateRouter,checkRouterAuth}
