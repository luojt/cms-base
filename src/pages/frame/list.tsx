import {lazy} from "react"


const routerList = [
    {
        path: "/login",
        component: lazy(() => import('../login')),
        auth: false
    },
    {
        path: "/",
        component: lazy(() =>import('../frame')),
        auth: true
    },

]

export default routerList;
