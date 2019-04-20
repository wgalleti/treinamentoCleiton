import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/cleiton',
      name: 'cleiton',
      component: () => import('./views/Cleiton.vue')
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: () => import('./views/Clientes.vue')
    }
  ]
})
