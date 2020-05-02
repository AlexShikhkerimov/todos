import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/note/:id',
    props: true,
    name: 'Note',
    component: () => import('../views/Note.vue')
  },
    {
      path: '/add',
      name: 'AddNote',
      component: () => import('../views/AddNote.vue')
    },
    {
      path: '/edit/:id',
      props: true,
      name: 'EditNote',
      component: () => import('../views/EditNote.vue')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
