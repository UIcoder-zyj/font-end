<template>
  <el-collapse :accordion="true">
    <el-collapse-item title="电机参数" name="1">
      <el-form ref="motor_form" label-width="120px" class="el-form">
        <el-form-item
          v-for="(item, index) in motor_form"
          :key="index"
          :label="item.name"
          label-position="center"
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
          v-for="(item, index) in ultrasound_form"
          :key="index"
          :label="item.name"
          label-position="left"
          label-width='70px'
          size="mini"
          class="el-form-style"
        >
        <div class='el-form-item-content'>
          <el-checkbox v-model="item.is_open" @change="changeState(item.is_open,index)">
            <span>使用</span>
          </el-checkbox>
          <span>距离：</span>
          <el-input style="width:60px" size="mini" class="form-item" v-model="item.dist"></el-input>
          <span>角度：</span>
          <el-input style="width:60px" size="mini" class="form-item" v-model="item.angle"></el-input>
          <span>{{ item.state }}</span>
        </div>
       </el-form-item>
        <el-button class="el-button-style" type="success" size="mini" @click="getParam" round>上传到底盘</el-button>
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
          data: 0,
        },
        {
          name: "轮子直径",
          data: 0,
        },
        {
          name: "轮子距离",
          data: 0,
        },
        {
          name: "电机最大转速",
          data: 0,
        },
        {
          name: "电机极对数",
          data: 0,
        },
      ],
      source_form: [
        {
          name: "安全电压",
          data: 0,
        },
        {
          name: "安全电量",
          data: 0,
        },
      ],
      ultrasound_form: [],
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    getParam() {
      console.log("this ultrasound_form is: ", this.ultrasound_form);
    },
    changeState(value, index) {
      console.log(value, index);
      this.ultrasound_form[index].state = value ? "打开" : "关闭";
    },
    initData() {
      console.log("ugv_info is ", this.$store.state.ugv_info);
      if (
        this.$store.state.ugv_info &&
        Object.keys(this.$store.state.ugv_info).length
      ) {
        const ultrasound_angles = this.$store.state.ugv_info.chassis_param
          .ultrasound_angles;
        const ultrasound_distances = this.$store.state.ugv_info.chassis_param
          .ultrasound_distances;
        const ultrasound_enables = this.$store.state.ugv_info.chassis_param
          .ultrasound_enables;
        console.log(ultrasound_angles);
        this.ultrasound_form.length = ultrasound_angles.length;
        for (let i in ultrasound_angles) {
          this.$set(this.ultrasound_form, i, {
            name: "超声波" + (parseInt(i) + 1),
            is_open: ultrasound_enables[i],
            dist: ultrasound_distances[i],
            angle: ultrasound_angles[i],
            state: ultrasound_enables[i] ? "打开" : "关闭",
          });
          // this.ultrasound_form.push({
          //   name: "超声波" + i.toString(),
          //   is_open: ultrasound_enables[i],
          //   dist: ultrasound_distances[i],
          //   anlge: ultrasound_angles[i],
          //   state:  "关闭",
          // });
        }
      }
      console.log("ulstrasound_form is ,", this.ultrasound_form);
    },
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
  position: relative;
  margin-left: 0px;
  margin-bottom: 0px;
}
.el-form-item-content{
  display: inline-block;
  position: absolute;
  top: 0px;
  left: 80px;
}
</style>
