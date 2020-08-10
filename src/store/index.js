/*
 * @Descripttion:
 * @version: X3版本
 * @Author: zyj
 * @Date: 2020-07-29 09:56:37
 * @LastEditors: zyj
 * @LastEditTime: 2020-07-30 09:45:07
 */
import Vue from 'vue'
import Vuex from 'vuex'
// import 'babel-polyfill'

import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

const state = {
  user_info: {},
  map_info: {},
  ugv_info: {},
  loginStatus: false,
  registerStatus: false,
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
