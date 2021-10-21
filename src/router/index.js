import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id',
    name: 'Detail',
    component : Detail,
    props : true,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
