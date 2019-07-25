import Vue from 'vue'
import Router from 'vue-router'
import Quotations from '@/components/Quotations'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Quotations',
      component: Quotations
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
