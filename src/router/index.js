import Vue from 'vue'
import Router from 'vue-router'
import Quotations from '@/components/Quotations'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Quotations',
      component: Quotations
    }
  ]
})
