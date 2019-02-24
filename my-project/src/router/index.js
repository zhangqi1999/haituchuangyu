import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home'
import Header from '@/components/Header'
Vue.use(Router)

export default new Router({
  mode: 'history', 
  routes: [
    {
      path:'/home',name:'Home',component:Home
    },
    {
      path: '/',name: 'HelloWorld',component: HelloWorld
    }
  ]
})

