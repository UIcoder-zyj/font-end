<template>
  <el-collapse>
    <el-collapse-item title="电机参数" name="1">
      <el-form ref="motor_form" label-width="120px" class="el-form">
        <el-form-item
          v-for="(item, index) in motor_form"
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
    <el-collapse-item title="电源管理参数" name="2">
      <el-form ref="source_form" label-width="120px" class="el-form">
        <el-form-item
          v-for="(item, index) in source_form"
          :key="index"
          :label="item.name"
          label-position="left"
          size="small"
          class="el-form-style"
        >
          <el-input size="mini" class="form-item-input" v-model="item.data"></el-input>
        </el-form-item>
        <el-button class="el-button-style" type="success" size="mini" round>上传到底盘</el-button>
        <el-button class="el-button-style" type="primary" size="mini" round>重置为默认值</el-button>
      </el-form>
    </el-collapse-item>
    <el-collapse-item title="超声波参数" name="3">
      <el-form ref="ulstrasound_form" label-width="80px" class="el-form">
        <el-form-item
          v-for="(item, index) in ulstrasound_form"
          :key="index"
          :label="item.name"
          label-position="left"
          size="small"
          class="el-form-style"
        >
          <el-checkbox v-model="item.is_open">使用</el-checkbox>距离：
          <el-input style="width:60px" size="mini" class="form-item" v-model="item.dist"></el-input>角度：
          <el-input style="width:60px" size="mini" class="form-item" v-model="item.angle"></el-input>
          <span>{{ item.state }}</span>
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
      motor_form: [
        {
          name: "减速比",
          data: "",
        },
        {
          name: "轮子直径",
          data: "",
        },
        {
          name: "轮子距离",
          data: "",
        },
        {
          name: "电机最大转速",
          data: "",
        },
        {
          name: "电机极对数",
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
  text-align: center;
}
.el-form el-button {
  padding-top: 10px;
}

.el-form-style {
  margin-left: 0px;
  margin-bottom: 0px;
}
</style>
