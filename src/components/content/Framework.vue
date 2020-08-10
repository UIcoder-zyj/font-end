<template>
  <div>
    <el-container class="container">
      <el-header>
        <main-tab-bar  :titles='titles'
          @handleSelect='handleSelect'
          :active-index='current_index'></main-tab-bar>
      </el-header>
      <el-container>
        <el-main>
          <slot name="main" />
        </el-main>
        <el-footer>
          <slot name="footer" />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MainTabBar from "./MainTabBar";
import {intToStringMixin} from 'common/mixins.js'
export default {
  name: "Framework",
  components:{
    MainTabBar
  },
  mixins: [intToStringMixin],
  props:{
    current_index:{
      type: String,
      default: '0'
    }
  },
  data(){
    return {
      titles: ["地图构建",'地图编辑','导航系统'],
      user_titles:['后台管理系统','切换用户','退出系统'],
      route_name: ['/slam','/editor','/navigation'],
    }
  },
  methods:{
    handleSelect(keyPath){
      let key=parseInt(keyPath[0]);
      console.log('key and current_index is :', key ,' ', this.current_index);

      if(key<this.titles.length){
        if(this.current_index!==key){
      //  this.current_index=key;
        this.$router.replace(this.route_name[key]);
        }
      }else{
        console.log('keypath is: ',keyPath);
      }

    }
  }
};
</script>

<style scoped>
@import "~assets/css/base.css";

html,body {
  height: 100%;
  margin-top: 0;
}
.container {
  text-align: center;
  height: 100%;
}
/* .logOut {
  margin-top: 20px;
} */
</style>
