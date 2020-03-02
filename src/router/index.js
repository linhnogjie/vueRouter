import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import User from '../components/User.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/user/:id',
        component: User
    }
]

let router = new VueRouter({
    routes
})

export default router