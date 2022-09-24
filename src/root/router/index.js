import { createRouter, createWebHistory } from 'vue-router'

import Default from '../views/Default'

const routes = [
  {
    path: '', component: Default,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router