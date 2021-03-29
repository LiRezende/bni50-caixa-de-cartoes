import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Interiores from '../views/Interiores.vue'
import Eventos from '../views/Eventos.vue'
import Tecnologia from '../views/Tecnologia.vue'
import Lazer from '../views/Lazer.vue'


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
    path: '/interiores',
    name: 'interiores',
    component: Interiores
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: Eventos
  },
  {
    path: '/tecnologia',
    name: 'Tecnologia',
    component: Tecnologia
  },
  {
    path: '/lazer',
    name: 'lazer',
    component: Lazer
  },
]

const router = new VueRouter({
  routes
})

export default router
