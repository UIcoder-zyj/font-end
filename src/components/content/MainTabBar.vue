<template>
  <div class="main-tab-bar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item
        v-for="(item, index) in titles"
        :key="index"
        :index="index | StringIndex"
        >{{ item }}</el-menu-item
      >
      <el-submenu :index="(titles.length)|StringIndex" class="user-info">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>用户</span>
        </template>
        <el-menu-item index="2-1">后台管理系统</el-menu-item>
        <el-menu-item index="2-2">切换用户</el-menu-item>
        <el-menu-item index="2-3">退出登录</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
// import Index from './Index'
export default {
  components: {},
  props: {
    titles: {
      type: Array,
      default: []
    },
    activeIndex:{
      type: String,
      default: '0'
    }
  },
  data() {
    return {
      // activeIndex: '0'
    };
  },
  filters: {
    StringIndex(index) {
      return index.toString();
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if(key===this.activeIndex){
        console.log('do nothing');
      }else{
        this.$emit('handleSelect',keyPath);
      }
    }
  }
};
</script>
<style scoped>

.user-info {
  position: absolute;
  right: 0px;
}
</style>
