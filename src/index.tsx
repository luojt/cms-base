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
import Login from './pages/login'
import {isLogin} from './utils/token'
import Frame from './pages/frame'
import AppRouter from "./pages/frame/appRouter";

ReactDOM.render(
    /*antd为组件提供统一的全局化配置。*/
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
            <HashRouter>
                <AppRouter/>
            </HashRouter>
        </Provider>
    </ConfigProvider>,
    document.getElementById('root')
)

reportWebVitals()
