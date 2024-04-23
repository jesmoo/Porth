import { createRouter, createWebHistory } from 'vue-router'
import { UserSearch } from '../views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UserSearch
    }
  ]
})

export default router
