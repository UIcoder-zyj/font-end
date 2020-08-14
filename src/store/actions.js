import * as types from "./types";

import userUtil from "common/user.js";
import mapUtil from "common/map.js";
import ugvUtil from "common/ugv.js";

import mapRequest from "network/map";
import userRequest from "network/user";
import commonRequest from "network/common";

export default {
  getData({ commit }) {
    return new Promise((resolve, reject) => {
      commonRequest
        .getData()
        .then(res => {
          if (res.status === 200) {
            userUtil.loadUserInfo(commit, res.data.user_info);
            ugvUtil.loadUgvInfo(commit, res.data.ugv_info);
            mapUtil.loadMapInfo(commit, res.data.map_info);
            resolve(res);
          }
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  },
  toLogin({ commit }, payload) {
    return new Promise((resolve, reject) => {
      userRequest
        .login(payload)
        .then(res => {
          if (res.status === 200) {
            if (res.data.user_state.code === 100) {
              userUtil.loadUserInfo(commit, res.data.user_state.user_info);
            }
            if (res.data.ugv_state.code === 200) {
              ugvUtil.loadUgvInfo(commit, res.data.ugv_state.ugv_info);
            }
            if (res.data.map_state.code !== 301) {
              mapUtil.loadMapInfo(commit, res.data.map_state.map_info);
            }
            resolve(res);
          }
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  },

  toRegister({ commit }, payload) {
    return new Promise((resolve, reject) => {
      userRequest
        .register(payload)
        .then(res => {
          if (res.status === 200) {
            //commit(types.REGISTER, res.data)
            commit(types.REGISTERSTATUS, true);
            resolve(res);
          }
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  },
  getUserInfo({ commit }) {
    return new Promise((resolve, reject) => {
      userRequest
        .getUserInfo()
        .then(res => {
          if (res.status === 200) {
            commit(types.USERINFO, res.data);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  logOut({ commit }) {
    return new Promise((resolve, reject) => {
      commit(types.USERINFO, null);
      commit(types.LOGINSTATUS, false);
      commit(types.LOGIN, "");
      window.localStorage.removeItem("token");
    });
  }
};
