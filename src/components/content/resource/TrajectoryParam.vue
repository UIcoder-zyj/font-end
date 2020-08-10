<template>
  <el-collapse>
    <el-collapse-item title="轨迹参数" name="1">
      <el-form ref="nav_form" label-width="120px" class="el-form">
        <el-form-item
          v-for="(item, index) in nav_form"
          :key="index"
          :label="item.name"
          label-position="left"
          size="small"
          class="el-form-style"
        >
          <el-input size="mini" class="form-item" v-model="item.data"></el-input>
        </el-form-item>
        <el-button class="el-button-style" type="success" size="mini" round>上传到底盘</el-button>
        <el-button class="el-button-style" type="primary" size="mini" round>重置为默认值</el-button>
      </el-form>
    </el-collapse-item>

  </el-collapse>
</template>

<script>
export default {
  name: "ChassisParam",
  data() {
    return {
      nav_form: [
        {
          name: "避障策略",
          data: "",
        },
        {
          type: 'input',
          name: "循环次数",
          data: "",
        },
        {

          name: "站点等待时间",
          data: "",
        },
        {
          name: "导航前进速度",
          data: "",
        },
        {
          name: "导航旋转速度",
          data: "",
        },
        {
          name: "导航加速度",
          data: "",
        },
        {
          name: "导航减速度",
          data: "",
        },
        {
          name: "障碍检测参数",
          data: "",
        },
        {
          name: "避障安全距离",
          data: "",
        },
        {
          name: "规划安全距离",
          data: "",
        },
         {
          name: "灵活规划开关",
          data: "",
        },
      ],
      source_form: [
        {
          name: "安全电压",
          data: "",
        },
        {
          name: "安全电量",
          data: "",
        },
      ],
      ulstrasound_form: [
        {
          name: "超声波1",
          is_open: false,
          dist: "",
          angle: "",
          state: "关闭",
        },
        {
          name: "超声波2",
          is_open: false,
          dist: "",
          angle: "",
          state: "关闭",
        },
        {
          name: "超声波3",
          is_open: false,
          dist: "",
          angle: "",
          state: "关闭",
        },
        {
          name: "超声波4",
          is_open: false,
          dist: "",
          angle: "",
          state: "关闭",
        },
        {
          name: "超声波5",
          is_open: false,
          dist: "",
          angle: "",
          state: "关闭",
        },
        {
          name: "超声波6",
          is_open: false,
          dist: "",
          angle: "",
          state: "关闭",
        },
      ],
    };
  },
};
</script>

<style scoped>
.el-form {
  font-size: 10px;
}

.el-form-style {
  margin-left: 0px;
  margin-bottom: 0px;
}
</style>
