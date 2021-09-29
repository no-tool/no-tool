import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

export const routes = [
    {
        path: '/',
        meta: {name: '首页'},
        component: Home
    },
    {
        path: '/tool',
        meta: {name: '工具'},
        component: () => import('@/views/tool-view'),
        children: [
            {
                path: 'github',
                meta: {name: 'GitHub'},
                component: () => import('@/views/tool-view/Level1'),
                children: [
                    {
                        path: 'user',
                        meta: {name: '用户'},
                        component: () => import('@/views/tool-view/Level2'),
                        children: [
                            {
                                path: 'get-a-user',
                                meta: {
                                    name: '获取一个用户',
                                    liveOn: '2021-09-24'
                                },
                                component: () => import('@/views/tool/github/user/GetAUser')
                            }
                        ]
                    }
                ]
            },
            {
                path: 'math',
                meta: {name: '数学'},
                component: () => import('@/views/tool-view/Level1'),
                children: [
                    {
                        path: 'calc',
                        meta: {name: '计算'},
                        component: () => import('@/views/tool-view/Level2'),
                        children: [
                            {
                                path: 'word-comb',
                                meta: {
                                    name: '字符组合',
                                    liveOn: '2021-09-25'
                                },
                                component: () => import('@/views/tool/math/calc/WordComb')
                            }
                        ]
                    },
                    {
                        path: 'format-conversion',
                        meta: {name: '格式转换'},
                        component: () => import('@/views/tool-view/Level2'),
                        children: [
                            {
                                path: 'time',
                                meta: {
                                    name: '时间',
                                    liveOn: '2021-09-29'
                                },
                                component: () => import('@/views/tool/math/format-conversion/Time')
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
