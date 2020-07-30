import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
const Index = () => import('views/Index.vue')
const Login = () => import('views/user/Login.vue')
const Register = () => import('views/user/Register.vue')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: {
        requiresAuth: true
      }
    },

  ]
})

// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem('token')
  if (to.meta.requiresAuth) {
    if (token) {
      store.dispatch('getUserInfo')
      next()
    } else {
      store.dispatch('logOut')
      next({
        path: '/login',
    //    query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router
