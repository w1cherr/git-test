import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // commom router
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/common2',
      name: 'common2',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/common',
      name: 'common',
      component: Home
    },
    {
      path: '/common3',
      name: 'common3',
      component: Home
    },
    {
      path: '/common4',
      name: 'common4',
      component: Home
    },
    // own router
    {
      path: '/aaa',
      name: 'a-path',
      component: Home
    },
    {
      path: '/aaa2',
      name: 'a-path2',
      component: Home
    }
  ]
})
