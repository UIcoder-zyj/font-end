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
        :router="true"
      >
        <el-menu-item
          v-for="(item, index) in items"
          :key="index"
          :index="item.link"
          v-if="item.type===1"
          router
        >
          <span>{{item.title}}</span>
        </el-menu-item>
        <el-submenu
          v-for="(item, index) in items"
          v-if="item.type===2"
          :key="index"
          class="user-info"
          :index="item.title"
        >
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>{{$store.state.user_info.username}}</span>
          </template>
          <el-menu-item
           v-for="(item1,index1) in item.items"
            :key="index1"
            :index="item1.link"
            >
            <span>{{item1.title}}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
  </div>
</template>

<script>
//  import store from 'store/index'
export default {
  components: {
  },
  props: {
    items: {
      type: Array,
      default: []
    },
    activeIndex:{
      type: String,
      default: '0'
    }
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);

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
