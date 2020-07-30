import * as types from './types'
import UserRequestHandler from 'network/user'

const userRequest=new UserRequestHandler();
export default {
  toLogin ({commit}, payload) {
    return new Promise((resolve, reject) => {
      userRequest.login(payload).then(res => {
        if (res.status === 200) {
          commit(types.LOGIN, res.data.token)
          commit(types.LOGINSTATUS, true)
         // instance.defaults.headers.common['Authorization'] = `Bearer ` + res.data.token
          window.localStorage.setItem('token', res.data.token)
          resolve(res)
        }
      }).catch((error) => {
        console.log(error)
        reject(error)
      })
    })
  },
  toRegister({commit},payload){
    return new Promise((resolve, reject) => {
      userRequest.register(payload).then(res => {
        if (res.status === 200) {
          //commit(types.REGISTER, res.data)
          commit(types.REGISTERSTATUS, true)
         // instance.defaults.headers.common['Authorization'] = `Bearer ` + res.data.token
         // window.localStorage.setItem('token', res.data.token)
          resolve(res)
        }
      }).catch((error) => {
        console.log(error)
        reject(error)
      })
    })
  },
  getUserInfo ({commit}) {
    return new Promise((resolve, reject) => {
      userRequest.getUserInfo().then(res => {
        if (res.status === 200) {
          commit(types.USERINFO, res.data)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  },
  logOut ({ commit }) {
    return new Promise((resolve, reject) => {
      commit(types.USERINFO, null)
      commit(types.LOGINSTATUS, false)
      commit(types.LOGIN, '')
      window.localStorage.removeItem('token')
    })
  }
}
