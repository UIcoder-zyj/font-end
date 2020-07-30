import * as types from './types.js'

const mutations = {
  [types.LOGIN]: (state, payload) => {
    state.token = payload
  },
  [types.USERINFO]: (state, payload) => {
    state.userInfo = payload
  },
  [types.LOGINSTATUS]: (state, payload) => {
    state.loginStatus = payload
  },
  [types.REGISTERSTATUS]: (state, payload) => {
    state.registerStatus = payload
  }
}

export default mutations
