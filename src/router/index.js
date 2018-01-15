import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Views/Home'
import prueba1 from '@/Views/prueba1'
import Clients from '@/Views/Clients'
import Clients1 from '@/Views/Clients1'
import Clients2 from '@/Views/Clients2'
import Clients3 from '@/Views/Clients3'
import Clients4 from '@/Views/Clients4'
import prueba3 from '@/Views/prueba3'
import quienesomos from '@/Views/quienesomos'
import quienesomosinfo from '@/Views/quienesomosinfo'
import Signup from '@/Views/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
	  path: '/prueba1',
      name: 'prueba 1',
      component: prueba1
    },
    {
    path: '/Clients',
      name: 'Clients',
      component: Clients
    },
    {
    path: '/Clients1',
      name: 'Clients1',
      component: Clients1
    },
    {
    path: '/Clients2',
      name: 'Clients2',
      component: Clients2
    },
    {
    path: '/Clients3',
      name: 'Clients3',
      component: Clients3
    },
    {
    path: '/Clients4',
      name: 'Clients4',
      component: Clients4
    },
    {
    path: '/prueba3',
      name: 'prueba 3',
      component: prueba3
    },
    {
    path: '/quienesomos',
      name: 'Quienes Somos',
      component: quienesomos
    },
    {
    path: '/quienesomosinfo',
      name: 'Quienes Somos Info',
      component: quienesomosinfo
    },
    {
    path: '/Signup',
      name: 'Sign Up',
      component: Signup
    }
  ],
  mode: 'history'
})
