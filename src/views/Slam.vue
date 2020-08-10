<template>
  <div class="slam">
    <framework class="container" current_index="0">
      <div slot="main" class="main">
                  <div style=" clear:both;"></div>

        <el-row>
          <div v-for="(item, index) in worker" :key="index" class="worker-item">
            <el-button v-if="item.type === 'button'" round>
              {{
              item.title
              }}
            </el-button>
            <el-dropdown v-else class="dropdown" trigger="hover">
              <el-button round>
                {{ item.title }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item1, index1) in item.item"
                  :key="index1"
                >{{ item1.name }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <el-button type="danger" @click.native="clickB" class="stop" round>停车</el-button>
        </el-row>
        <div class='main-show'>
          <div style=" clear:both;"></div>
            <resource class="resource" type="slam" />
            <div id='map' class='map' />
        </div>
      </div>
      <div slot="footer">
        <span>slam footer</span>
      </div>
    </framework>
  </div>
</template>

<script>
import Framework from "components/content/Framework";
import Resource from "components/content/resource/Resource";
export default {
  data() {
    return {
      worker: [
        {
          type: "button",
          title: "开始建图",
        },
        {
          type: "button",
          title: "保存地图",
        },
        {
          type: "button",
          title: "结束建图",
        },
        {
          type: "menu",
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
      cmd_vel: {},
    };
  },
  components: {
    Framework,
    Resource,
  },
  created() {
    this.cmd_vel = new this.$ROSLIB.Topic({
      ros: this.$ros,
      name: "/cmd_vel",
      messageType: "geometry_msgs/Twist",
    });
  },
  mounted(){
    const viewer = new this.$ROS3D.Viewer({
      divID : 'map',
      width : 400,
      height : 300,
      antialias : true
    });
    const tfClient = new this.$ROSLIB.TFClient({
        ros : this.$ros,
        fixedFrame : 'map',
        angularThres : 0.01,
        transThres : 0.01
    });
    const gridClient = new this.$ROS3D.OccupancyGridClient({
        ros : this.$ros,
        viewer: viewer,
        tfClient: tfClient,
        rootObject : viewer.selectableObjects,
        continuous : true,
        name: 'occupancyGrid'
    });
  },
  methods: {
    getUserInfo() {
      this.$store.dispatch("getUserInfo");
    },
    clickB() {
      let twist = new this.$ROSLIB.Message({
        linear: {
          x: 0.1,
          y: 0.2,
          z: 0.3,
        },
        angular: {
          x: -0.1,
          y: -0.2,
          z: -0.3,
        },
      });

      console.log("Publishing cmd_vel");
      this.cmd_vel.publish(twist);
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
.main {
  /* display:inline-block; */
  /* float:left; */
  position: relative;
  height: 100%;
  margin-left: 0px;
  margin-right: 0px;
  /* overflow: hidden; */
}
.main-show{
  float: left;
  /* display:inline-block; */
  position: relative;
  bottom: 0
}
.resource {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 9;
  width: 600px;
  /* background-color: white; */
}
.map{
  position: absolute;
  top: 0px;
  left: 100px;
  right: 0px;
  bottom: 0px;
  height: 100%

}
.worker-item {
  width: 100px;
  padding-left: 10px;
  float: left;
  padding-bottom: 10px;
}
.container {
  text-align: center;
  height: 100%;
}
.slam {
  text-align: center;
  height: 100%;
}
.stop {
  position: absolute;
  right: 20px;
}
/* .dropdown {
  margin-left: 10px;
} */


.tab-bar {
  position: relative;
  z-index: 9;
}
/* .main-center{
  position: absolute;
  top: 60px;
  bottom: 8px;
  left: 0;
  right: 0;
  margin-left: 0px;
  margin-right:0px;
  height: 100%;
  display: flex;
  justify-content: center;
} */
.logOut {
  margin-top: 20px;
}
</style>
