import React, {Suspense} from 'react'
import KeepAlive from 'react-activation'

// 路由处理方式
const generateRouter = (routers: any[]) => {
    return routers.map((item) => {
        if (item.children) {
            item.children = generateRouter(item.children)
        }

        if (item.keepAlive) {
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


export {generateRouter}