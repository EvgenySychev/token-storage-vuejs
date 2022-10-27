import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import NotFound from '../components/error-pages/NotFound'
import TokenList from '../components/token/TokenList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/token/list',
      name: 'TokenList',
      component: TokenList
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
