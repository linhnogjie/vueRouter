import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import User from '../components/User.vue'
import Phone from '../components/home/Phone.vue'
import Tablet from '../components/home/Tablet.vue'
import Compute from '../components/home/Compute.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: 'phone',
                components: {
                    default: Phone,
                    tab: Tablet,
                    com: Compute
                }
            },
            {
                path: 'tablet',
                components: {
                    default: Phone,
                    tab: Tablet,
                    com: Compute
                }
            },
            {
                path: 'compute',
                component: Compute
            },
            {
                path: '',
                component: Phone
            }
        ]
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/user/:id',
        name: 'user',
        component: User
    }
]

let router = new VueRouter({
    routes
})

export default router