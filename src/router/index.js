import Vue from 'vue'
import Router from 'vue-router'
import store from 'store/index'
const Main = () => import('views/main/Main.vue')
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
      path: '/main',
      name: 'Main',
      component: Main,
      children:[
        {
          path:'',
          redirect:'slam'
        },
        {
          path: 'slam',
          name: 'Slam',
          component: Slam,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'editor',
          name: 'Editor',
          component: Editor,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'navigation',
          name: 'Navigation',
          component: Navigation,
          meta: {
            requiresAuth: true
          }
        },

      ],
      meta: {
        requiresAuth: true
      }
    },
  ]
})

// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  let token=sessionStorage.getItem('token');
  console.log("from path is:" ,from.path," to.path is :",to.path)
  console.log('token is :',token);
  if (to.meta && to.meta.requiresAuth) {
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
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
