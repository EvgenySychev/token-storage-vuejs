import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../components/error-pages/NotFound'
import TokenList from '../components/token/TokenList'
import AddTokenPage from '../components/token/AddTokenPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/add-token',
      name: 'AddTokenPage',
      component: AddTokenPage
    },
    {
      path: '/',
      name: 'TokenList',
      component: TokenList
    },
    {
      path: '/tokens',
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
