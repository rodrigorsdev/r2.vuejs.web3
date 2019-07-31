import Vue from 'vue'
import Router from 'vue-router'
import JnsDapp from '@/components/jns-dapp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'jns-dapp',
      component: JnsDapp
    }
  ]
})
