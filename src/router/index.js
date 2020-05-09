import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/page/HelloWorld'
import platform from '@/components/page/Platform'
import register from '@/components/page/register'
import register2 from '@/components/page/register2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'platform',
      component: platform
    },{
      path: '/register',
      name: 'register',
      component: register
    },{
      path: '/register2',
      name: 'register2',
      component: register2
    }
  ]
})