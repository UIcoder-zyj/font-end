<!--
 * @Descripttion:
 * @version: 1.0.0
 * @Author: zyj
 * @Date: 2020-08-14 19:30:06
 * @LastEditors: zyj
 * @LastEditTime: 2020-08-14 21:55:59
-->
<template>
  <div class="worker">
    <div v-for="(item, index) in worker" :key="index" class="worker-item">
      <el-button
        size="small"
        v-if="item.label === 'button'"
        round
        @click="getSource(item.link)"
      >{{ item.title }}</el-button>
      <el-dropdown v-else class="dropdown" trigger="hover">
        <el-button size="small" round>{{ item.title }}</el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(item1, index1) in item.item" :key="index1">
            <!-- <el-button size="small" round> -->
            {{ item1.name }}
            <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
            <!-- </el-button> -->
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-button type="danger" class="stop" size="small" round>停车</el-button>
  </div>
</template>

<script>
import links from "common/link";
export default {
  name: "Worker",
  props: {
    worker: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    getSource(link) {
      console.log("link is : ", link, link && links[link]);
      if (link && links[link]) {
        console.log("link is : ", link);
        links[link]();
      }
    },
  },
};
</script>

<style scoped>
.worker {
  overflow: hidden;
}

.worker-item {
  float: left;
  padding-right: 10px;
  padding-bottom: 10px;
}
.stop {
  float: left;
}
</style>
