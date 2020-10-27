import { createRouter, createWebHistory } from 'vue-router'

import SampleView from '../views/SampleView.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
  
    // {
    //     path: '/',
    //     component: Home
    // },
    {
        path: '/sample',
        component: SampleView
    },
    // { // example with url parameter
    //     path: '/example/:id',
    //     component: Example
    // },   
    // { //example with separate path / name
    //      path: '/example1/example2/:param',
    //      name: 'example1/example2',
    //      component: UnderwriterOwner
    //  }        
        
    ]
  })

  export default router