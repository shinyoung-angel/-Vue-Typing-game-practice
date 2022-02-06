import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Version1 from '@/components/typing-game-v1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/v1',
    name: 'Version1',
    component: Version1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
