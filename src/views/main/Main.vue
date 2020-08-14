<template>
  <el-container class="container">
    <el-header>
      <main-tab-bar :items='items'/>
    </el-header>
    <el-main style="padding-bottom: 0px">
      <keep-alive>
        <router-view />
      </keep-alive>
    </el-main>
    <el-footer>
      <states/>
    </el-footer>
  </el-container>
</template>

<script>
import States from "components/content/States";
import MainTabBar from "components/content/MainTabBar";

export default {
  name: "Main",
  data() {
    return {
      items: [
        {
          type: 1,
          title: "地图构建",
          link: "/main/slam",
        },
        {
          type: 1,
          title: "地图编辑",
          link: "/main/editor",
        },
        {
          type: 1,
          title: "导航系统",
          link: "/main/navigation",
        },
        {
          type: 2,
          title: "user",
          items: [
            {
              type: 1,
              title: "后台管理系统",
              link: "/main/back_system",
            },
            {
              type: 1,
              title: "切换用户",
              link: "/main/switch",
            },
            {
              type: 1,
              title: "退出系统",
              link: "/main/out",
            },
          ],
        },
      ],
    };
  },
  props: {
    activeIndex: {
      type: String,
      default() {
        return "0";
      },
    },
  },
  methods: {
    handleSelect(keyPath) {
      let key = parseInt(keyPath[0]);
      console.log("keyPath ", keyPath);
    },
  },
  components: {
    MainTabBar,
    States,
  },
};
</script>

<style scoped>
@import "~assets/css/base.css";

html,
body {
  height: 100%;
  margin-top: 0;
}
.container {
  height: 100%;
}
.el-header{
  padding: 0px;
  font-size: 14px
}
.el-footer{
  padding: 0
}
</style>
