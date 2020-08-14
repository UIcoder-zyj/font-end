/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: zyj
 * @Date: 2020-08-14 19:30:06
 * @LastEditors: zyj
 * @LastEditTime: 2020-08-14 21:16:27
 */
import Vue from "vue";
import App from "./App";
import router from "./router";
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

// import { Button, Table } from 'view-design';
// Vue.component('Button', Button);
// Vue.component('Table', Table);

import store from "./store";
import ROSLIB from 'roslib'
import * as ROS3D from './common/core3d.js'
const ros = new ROSLIB.Ros({
  url: "ws://localhost:9090"
});
ros.on("connection", function() {
  console.log("Connected to websocket server.");
});

ros.on("error", function(error) {
  console.log("Error connecting to websocket server: ", error);
});
ros.on("close", function() {
  console.log("Connection to websocket server closed.");
});
Vue.prototype.$ros=ros;
Vue.prototype.$ROSLIB=ROSLIB;
Vue.prototype.$ROS3D=ROS3D;
Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
