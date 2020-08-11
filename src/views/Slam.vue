<template>
  <div class="slam">
    <framework class="container" current_index="0">
      <div slot="main" class="main">
        <div class='worker'>
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
        </div>
        <div class='main-show'>
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
      width: {
        type: Number,
        default: 0
      },
      height: {
        type: Number,
        default: 0
      }
    };
  },
  components: {
    Framework,
    Resource,
  },
  created() {

  },
  mounted(){
    this.width=document.body.clientWidth-150;
    this.height=document.body.clientHeight-190
    const viewer = new this.$ROS3D.Viewer({
      divID : 'map',
      width : this.width,
      height : this.height,
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
.slam {
  height: 100%;
}
.el-main{
height: 100%;
}
.el-main .main {
  height: 100%;
  /* margin-left: 0px; */
  /* margin-right: 0px; */

}
.main-show{
  position: relative;
}
.worker{
  overflow: hidden;
}
.worker-item {
  float: left;
  padding-left: 10px;
  padding-bottom: 10px;
}
.stop {
  float: right
}
.map{
  margin-left: 110px;

}





</style>
