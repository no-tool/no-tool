import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

export const routes = [
    {
        path: '/',
        meta: {
            title: '首页',
            mdi: 'mdi-home'
        },
        component: Home
    },
    {
        path: '/github',
        meta: {
            title: 'GitHub',
            mdi: 'mdi-github'
        },
        component: () => import('@/views/tool-view/Level1'),
        children: [
            {
                path: 'user',
                meta: {title: '用户'},
                component: () => import('@/views/tool-view/Level2'),
                children: [
                    {
                        path: 'get-a-user',
                        meta: {
                            title: '获取一个用户',
                            liveOn: '2021-09-24'
                        },
                        component: () => import('@/views/tool/github/user/GetAUser')
                    }
                ]
            }
        ]
    },
    {
        path: '/math',
        meta: {
            title: '数学',
            mdi: 'mdi-math-compass'
        },
        component: () => import('@/views/tool-view/Level1'),
        children: [
            {
                path: 'calc',
                meta: {title: '计算'},
                component: () => import('@/views/tool-view/Level2'),
                children: [
                    {
                        path: 'word-comb',
                        meta: {
                            title: '字符组合',
                            liveOn: '2021-09-25'
                        },
                        component: () => import('@/views/tool/math/calc/WordComb')
                    }
                ]
            },
            {
                path: 'format-conversion',
                meta: {title: '格式转换'},
                component: () => import('@/views/tool-view/Level2'),
                children: [
                    {
                        path: 'time',
                        meta: {
                            title: '时间',
                            liveOn: '2021-09-29'
                        },
                        component: () => import('@/views/tool/math/format-conversion/Time')
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
