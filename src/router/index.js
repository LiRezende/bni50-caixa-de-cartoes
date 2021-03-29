import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Tecnologia from '../views/Tecnologia.vue'
import Eventos from '../views/Eventos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/tecnologia',
    name: 'Tecnologia',
    component: Tecnologia
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: Eventos
  },
]

const router = new VueRouter({
  routes
})

export default router
