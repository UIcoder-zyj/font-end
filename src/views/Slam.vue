<template>
  <div class="slam">
    <framework class="container" current_index="0">
      <div slot="main" class="main">
        <workspace :worker="worker" />
        <div class="main-show">
          <resource class="resource" type="slam" />
          <div id="map" class="map" />
        </div>
      </div>
      <div slot="footer">
        <states/>
      </div>
    </framework>
  </div>
</template>

<script>
import Framework from "components/content/Framework";
import Workspace from "components/content/Workspace";
import States from "components/content/States";

import Resource from "components/content/resource/Resource";
export default {
  data() {
    return {
      worker: [
        {
          label: "button",
          title: "开始建图",
        },
        {
          label: "button",
          title: "保存地图",
        },
        {
          label: "button",
          title: "结束建图",
        },
        {
          label: "menu",
          title: "默认地图",
          item: [
            {
              name: "设置为默认地图",
            },
            {
              name: "加载默认地图",
            },
          ],
        },
      ],
      width: {
        type: Number,
        default: 0,
      },
      height: {
        type: Number,
        default: 0,
      },
    };
  },
  components: {
    Framework,
    Resource,
    Workspace,
    States
  },
  created() {},
  mounted() {
    this.rosInit();
  },
  methods: {
    rosInit() {
      this.width = document.body.clientWidth - 150;
      this.height = document.body.clientHeight - 190;
      const viewer = new this.$ROS3D.Viewer({
        divID: "map",
        width: this.width,
        height: this.height,
        antialias: true,
      });
      const tfClient = new this.$ROSLIB.TFClient({
        ros: this.$ros,
        fixedFrame: "map",
        angularThres: 0.01,
        transThres: 0.01,
      });
      const gridClient = new this.$ROS3D.OccupancyGridClient({
        ros: this.$ros,
        viewer: viewer,
        tfClient: tfClient,
        rootObject: viewer.selectableObjects,
        continuous: true,
        name: "occupancyGrid",
      });
    },
    logOut() {
      this.$store.dispatch("logOut");
      this.$router.push({
        path: "/login",
      });
    },
  },
};
</script>

<style scoped>
@import "../assets/css/base.css";

html,
body {
  height: 100%;
  margin-top: 0;
}
.slam {
  height: 100%;
}
.el-main {
  height: 100%;
}
.el-main .main {
  height: 100%;
  /* margin-left: 0px; */
  /* margin-right: 0px; */
}
.main-show {
  position: relative;
}
.map {
  margin-left: 110px;
}
</style>
