<template>
  <div class="chassis-control">
    <table width="300px" border="0" class="keytable">
      <tr v-for="(item, index) in joy_form.position">
        <td v-for="(td_item, td_index) in item" class="keytd">
          <img class="keyimg" v-if="td_item !== -1" :src="getImgUrl(joy_form.image_url[td_item])" />
        </td>
      </tr>
    </table>
    <el-row v-for="(item,index) in key_param" :key="index">
      <el-col :span="4">
        <span>{{item.name}}</span>
      </el-col>
      <el-col :span="16">
        <el-slider v-model="item.value" :max="item.max" :step="item.step"></el-slider>
      </el-col>
      <el-col :span="4">
        <span>{{ item.value }}</span>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "ChassisControl",
  data() {
    return {
      joy_form: {
        width: 3,
        height: 3,
        position: [
          [-1, 0, -1],
          [1, 2, 3],
          [-1, 4, -1],
        ],
        image_url: [
          "up.png",
          "left.png",
          "center.png",
          "right.png",
          "down.png",
        ],
      },
      key_param: [
        {
          name: "线速度",
          type: "linear",
          value: 0.3,
          max: 0.6,
          step: 0.01,
        },
        {
          name: "角速度",
          type: "angular",
          value: 0.2,
          max: 0.8,
          step: 0.01,
        },
      ],
    };
  },
  methods: {
    getImgUrl(icon) {
      return require("assets/joystick/" + icon);
    },
  },
};
</script>

<style scoped>
.chassis-control{
  background-color: white;
}
.keytable {
  /*为表格设置合并边框模型*/
  border-collapse: collapse;
  /*列宽由表格宽度和列宽度设定*/
  table-layout: fixed;
  /* overflow: hidden; */
}

.keytd {
  border: 0px solid #ddd;
  /*允许在单词内换行。*/
  word-break: break-word;
  /*设置宽度*/
  width: 100px;
  height: 100px;
  text-align: center;
}
.keyimg {
  cursor: pointer;
}
</style>
