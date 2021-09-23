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
