import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [ //routes are going to be the destination 
  {
    path: '/',  //this is for the homepage
    name: 'home',
    component: HomeView //which component is gonna be rendered to the browser
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue') //being preloaded before it can be used
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import ('../views/ResumeView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue') 
  },

  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import('../views/TestimonialsView.vue') 
  },
  {
    path: '/reachMe',
    name: 'reachMe',
    component: () => import('../views/ReachMeView.vue') 
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
