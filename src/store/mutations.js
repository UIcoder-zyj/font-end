import * as types from './types.js'

const mutations = {
  [types.LOGIN]: (state, payload) => {
    state.token = payload
  },
  [types.USERINFO]: (state, payload) => {
    state.user_info = payload
    console.log('we go to the mutation',state.user_info);

  },
  [types.MAPINFO]: (state, payload) => {
    state.map_info = payload
  },
  [types.UGVINFO]: (state, payload) => {
    state.ugv_info = payload
  },
  [types.LOGINSTATUS]: (state, payload) => {
    state.loginStatus = payload
  },
  [types.REGISTERSTATUS]: (state, payload) => {
    state.registerStatus = payload
  }
}

export default mutations
