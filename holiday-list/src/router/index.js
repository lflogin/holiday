import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    redirect: 'peding',
    children: [
      {
        path: 'peding',
        name: 'peding',
        component: () => import(/* webpackChunkName: "about" */ '../views/Peding.vue'),
      },
      {
        path: 'sent',
        name: 'sent',
        component: () => import(/* webpackChunkName: "about" */ '../views/Sent.vue'),
      },
      {
        path: 'processed',
        name: 'processed',
        component: () => import(/* webpackChunkName: "about" */ '../views/Processed.vue'),
      },
      {
        path: 'detail',
        name: 'detail',
        component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue'),
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
