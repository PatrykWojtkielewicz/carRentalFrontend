import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Users from '../views/Users.vue'
import Logout from '../views/Logout.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/users',
        name: 'Users',
        component: Users
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router