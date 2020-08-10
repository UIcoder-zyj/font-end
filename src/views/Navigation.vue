<template>
  <div class="navigation">
    <framework class="container" current_index="2">
      <div slot="main" class="main">
        <el-row>
          <div v-for="(item, index) in worker" :key="index" class="worker-item">
            <el-button v-if="item.type === 'button'" round>{{
              item.title
            }}</el-button>
            <el-dropdown v-else class="dropdown" trigger="hover">
              <el-button round>
                {{ item.title }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item1, index1) in item.item"
                  :key="index1"
                  >{{ item1.name }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <el-button type="danger" class="stop" round>停车</el-button>
        </el-row>
        <el-row :gutter="20" style="margin-left: 0px; margin-right: 0px;">
          <el-col style="width:500px">
            <resource class="resource" type="nav" />
          </el-col>
          <el-col :span="16">
            <!-- <resource class="resource" /> -->
          </el-col>
        </el-row>
      </div>
      <div slot="footer">
        <span>slam footer</span>
      </div>
    </framework>
  </div>
</template>

<script>
import Framework from "components/content/Framework";
import Resource from "components/content/resource/Resource";

export default {
  data() {
    return {
      worker: [
        {
          type: "button",
          title: "开始建图"
        },
        {
          type: "button",
          title: "保存地图"
        },
        {
          type: "button",
          title: "结束建图"
        },
        {
          type: "menu",
          title: "默认地图",
          item: [
            {
              name: "设置为默认地图"
            },
            {
              name: "加载默认地图"
            }
          ]
        }
      ]
    };
  },
  components: {
    Framework,
    Resource
  },
  created() {
    // this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      this.$store.dispatch("getUserInfo");
    },
    logOut() {
      this.$store.dispatch("logOut");
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>

<style scoped>
@import "../assets/css/base.css";

html,
body {
  height: 100%;
  margin-top: 0;
}
.worker-item {
  width: 100px;
  padding-left: 10px;
  float: left;
  padding-bottom: 10px;
}
.container {
  text-align: center;
  height: 100%;
}
.navigation {
  text-align: center;
  height: 100%;
}
.stop {
  position: absolute;
  right: 20px;
}
/* .dropdown {
  margin-left: 10px;
} */
.resource {
  width: 500px;
}
.main {
  position: relative;
  height: 100%;
  margin-left: 0px;
  margin-right: 0px;
}
/* .main-center{
  position: absolute;
  top: 60px;
  bottom: 8px;
  left: 0;
  right: 0;
  margin-left: 0px;
  margin-right:0px;
  height: 100%;
  display: flex;
  justify-content: center;
} */
.logOut {
  margin-top: 20px;
}
</style>
