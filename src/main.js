import Vue from "vue";
import App from "./App";
import router from "./router";
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
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
