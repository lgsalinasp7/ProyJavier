import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormPersonas from '../components/FormPersonas.vue'
import FormProyectos from '../components/FormProyectos.vue'
import FormAsociar from '../components/FormAsociar.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/personas',
    name: 'personas',
    component: FormPersonas
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: FormProyectos
  },
  {
    path: '/asociar',
    name: 'asociar',
    component: FormAsociar
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router