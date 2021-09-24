import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/tool',
        component: () => import('@/views/tool-view'),
        children: [
            {
                path: 'github',
                component: () => import('@/views/tool-view/Level1'),
                children: [
                    {
                        path: 'user',
                        component: () => import('@/views/tool-view/Level2'),
                        children: [
                            {
                                path: 'get-a-user',
                                component: () => import('@/views/tool/github/user/GetAUser')
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        // 会匹配所有路径 一般用韵404
        path: '*',
        component: () => import('@/views/View404')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
