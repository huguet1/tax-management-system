import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import AdminDashboard from '@/views/AdminDashboard.vue'
import TaxpayerDashboard from '@/views/TaxpayerDashboard.vue'

const routes = [

{path:'/',component:Home},
{path:'/login',component:Login},
{path:'/register',component:Register},

{path:'/admin',component:AdminDashboard},
{path:'/taxpayer',component:TaxpayerDashboard}

]

export default createRouter({
history:createWebHistory(),
routes
})