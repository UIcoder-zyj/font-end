import * as types from './types'
import UserRequestHandler from 'network/user'
import userUtil  from 'common/user.js'
import mapUtil  from 'common/map.js'
import ugvUtil  from 'common/ugv.js'

const userRequest=new UserRequestHandler();
export default {
  toLogin ({commit}, payload) {
    return new Promise((resolve, reject) => {
      userRequest.login(payload).then(res => {
        if (res.status === 200) {
          userUtil.loadUserInfo(commit,res.data.user_state);
          ugvUtil.loadUgvInfo(commit,res.data.ugv_state);
          mapUtil.loadMapInfo(commit,res.data.map_state);
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
