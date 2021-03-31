import Vue from 'vue'
import Router from 'vue-router'
import Home from './vievs/Home.vue'

Vue.use(Router)


export default new Router({
  mode:'history',
  routes:[

    {
        path:'/',
        component: Home
    },
    {
        path:'/todos',
        component:()=>import('./vievs/Todos.vue')
    }
  ]


})