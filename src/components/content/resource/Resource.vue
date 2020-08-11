<template>
  <div class="resource">
    <el-tabs tab-position="left" v-model="activeName" type="card">
      <el-tab-pane label="地图管理" name="first" style='margin-right:0px'>
        <maps-show class="resource-item" />
      </el-tab-pane>
      <el-tab-pane label="底盘参数" name="second" style='margin-right:0px'>
        <chassis-param class="resource-item" />
      </el-tab-pane>
      <el-tab-pane label="轨迹参数" v-if="type==='nav'" name="third" style='margin-right:0px'>
        <trajectory-param class="resource-item" />
      </el-tab-pane>
      <el-tab-pane label="底盘控制" name="fourth" style='margin-right:0px'>
        <chassis-control class="resource-item" />
      </el-tab-pane>

      <el-tab-pane label="隐藏" name="fifth"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ChassisParam from "./ChassisParam";
import ChassisControl from "./ChassisControl";
import MapsShow from "./MapsShow";
import TrajectoryParam from "./TrajectoryParam";


export default {
  name: "Resource",
  props: {
    type: {
      type: String,
      default: "slam",
    },
  },
  data() {
    return {
      activeName: "first",
    };
  },
  components: {
    ChassisParam,
    ChassisControl,
    MapsShow,
    TrajectoryParam
  },
};
</script>
<style scoped>
.resource {
  position: absolute
}
 .resource .resource-item{
  width: 500px;
}
.el-button-style {
  margin-top: 20px;
}

</style>
