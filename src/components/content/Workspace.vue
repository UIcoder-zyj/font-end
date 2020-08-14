<template>
  <div class="worker">
    <div v-for="(item, index) in worker" :key="index" class="worker-item">
      <el-button v-if="item.label === 'button'" round>{{ item.title }}</el-button>
      <el-dropdown v-else class="dropdown" trigger="hover">
        <el-button round native-type='button' @click.native="getSource(item.link)">
          {{ item.title }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item1, index1) in item.item"
            native-type='button'
            @click.native="getSource(item1.link)"
            :key="index1"
          >{{ item1.name }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-button type="danger" class="stop" round>停车</el-button>
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
      console.log("link is : ", link);

      if (link) {
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
  padding-left: 10px;
  padding-bottom: 10px;
}
.stop {
  float: right;
}
</style>
