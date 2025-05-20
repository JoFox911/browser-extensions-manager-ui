import { createRouter, createWebHistory } from 'vue-router'
import ExtensionsPage from '@/pages/ExtensionsPage.vue'

const routes = [
  {
    path: '/',
    component: ExtensionsPage
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})