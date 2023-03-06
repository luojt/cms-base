import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import {Provider} from 'react-redux'
import store from './store/index'
import {ConfigProvider} from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import enUs from 'antd/lib/locale/en_US'
import './assets/style/index.less'
import {HashRouter} from 'react-router-dom'
import AppRouter from "./pages/frame/appRouter"
import {AliveScope} from "react-activation"

ReactDOM.render(
    /*antd为组件提供统一的全局化配置。*/
    <ConfigProvider locale={zhCN}>
        <AliveScope>
            <Provider store={store}>
                <HashRouter>
                    <AppRouter/>
                </HashRouter>
            </Provider>
        </AliveScope>

    </ConfigProvider>,
    document.getElementById('root')
)

reportWebVitals()
