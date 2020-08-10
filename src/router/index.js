import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
const Slam = () => import('views/Slam.vue')
const Login = () => import('views/user/Login.vue')
const Register = () => import('views/user/Register.vue')
const Editor = () => import('views/Editor.vue')
const Navigation = () => import('views/Navigation.vue')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/slam'
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
      path: '/slam',
      name: 'Slam',
      component: Slam,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/navigation',
      name: 'Navigation',
      component: Navigation,
      meta: {
        requiresAuth: false
      }
    },

  ]
})

// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  let token;
  if(store.state.user_info&&store.state.user_info.token ){
    token=store.state.user_info.token;
  }
  if (to.meta.requiresAuth) {
    if (token) {
      //store.dispatch('getUserInfo')
      next()
    } else {
      store.dispatch('logOut')
      next({
        path: '/login',
      })
    }
  } else {
    next()
  }
})

export default router
