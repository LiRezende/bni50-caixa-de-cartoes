import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EngenhariaConstrucao from '../views/EngenhariaConstrucao.vue'
import Interiores from '../views/Interiores.vue'
import FinancasAdvogados from '../views/FinancasAdvogados.vue'
import Imobiliária from '../views/Imobiliaria.vue'
import Comunicação from '../views/Comunicacao.vue'
import Eventos from '../views/Eventos.vue'
import ServicosEmpresariais from '../views/ServicosEmpresariais.vue'
import DesenvolvimentoHumano from '../views/DesenvolvimentoHumano.vue'
import ServiçosPessoais from '../views/ServicosPessoais.vue'
import BelezaSaude from '../views/BelezaSaude.vue'
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
    path: '/engenharia-e-construcao',
    name: 'engenharia-e-construcao',
    component: EngenhariaConstrucao
  },
  {
    path: '/interiores',
    name: 'interiores',
    component: Interiores
  },
  {
    path: '/financas-e-advogados',
    name: 'financas-e-advogados',
    component: FinancasAdvogados
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
    path: '/servicos-empresariais',
    name: 'servicos-empresariais',
    component: ServicosEmpresariais
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
    path: '/beleza-saude-e-bem-estar',
    name: 'beleza-saude-e-bem-estar',
    component: BelezaSaude
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
