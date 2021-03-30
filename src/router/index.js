import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Interiores from '../views/Interiores.vue'
import Imobiliária from '../views/Imobiliaria.vue'
import Comunicação from '../views/Comunicacao.vue'
import Eventos from '../views/Eventos.vue'
import DesenvolvimentoHumano from '../views/DesenvolvimentoHumano.vue'
import ServiçosPessoais from '../views/ServicosPessoais.vue'
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
    path: '/imobiliaria',
    name: 'imobiliaria',
    component: Imobiliária
  },
  {
    path: '/comunicacao',
    name: 'comunicacao',
    component: Comunicação
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: Eventos
  },
  {
    path: '/desenvolvimento-humano',
    name: 'desenvolvimento-humano',
    component: DesenvolvimentoHumano
  },
  {
    path: '/servicos-pessoais',
    name: 'servicos-pessoais',
    component: ServiçosPessoais
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
