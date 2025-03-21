import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/About.vue'
import Skills from '@/views/Skills.vue'
import Projects from '@/views/Projects.vue'
import CV from '@/views/CV.vue'

const routes = [
  { path: '/about', component: About },
  { path: '/skills', component: Skills },
  { path: '/projects', component: Projects },
  { path: '/cv', component: CV },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
