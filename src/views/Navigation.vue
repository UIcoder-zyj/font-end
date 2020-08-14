<template>
  <div class="navigation">
    <workspace :worker="worker" />
    <div class="main-show">
      <resource class="resource" type="nav" />
      <div id="map" class="map" />
    </div>

  </div>
</template>

<script>
import Framework from "components/content/Framework";
import Workspace from "components/content/Workspace";
import States from "components/content/States";

import Resource from "components/content/resource/Resource";
import { rosInitMixin, getDataMixin } from "common/mixins";
export default {
  data() {
    return {
      worker: [
        {
          label: "button",
          title: "初始位置",
        },
        {
          label: "button",
          title: "任意目标",
        },
        {
          label: "menu",
          title: "轨迹设置",
          item: [
            {
              name: "载入轨迹",
              link: '/api/trajectory/load'
            },
            {
              name: "从地图去除轨迹",
              link: '/api/trajectory/remove'
            },
            {
              name: "删除轨迹",
              link: '/api/trajectory/delete'

            },
            {
              name: "保存轨迹",
              link: '/api/trajectory/save'

            },
            {
              name: "另存轨迹",
              link: '/api/trajectory/save_as'

            },
            {
              name: "添加新轨迹",
              link: '/api/trajectory/add'

            },
            {
              name: "添加轨迹点",
              link: '/api/trajectory/add_point'

            },
            {
              name: "删除轨迹点",
              link: '/api/trajectory/delete_point'

            },
            {
              name: "闭合/断开轨迹",
              link: '/api/trajectory/close'

            },
          ],
        },
        {
          label: "menu",
          title: "工作站",
          item: [
            {
              name: "去工作站(id)",
            },
            {
              name: "去工作站(给定)",
            },
            {
              name: "机器人位置添加工作站",
            },
            {
              name: "手动添加工作站",
            },
            {
              name: "序号删除工作站",
            },
            {
              name: "手动删除工作站",
            },
            {
              name: "序号删除工作站(数据库)",
            },
            {
              name: "手动删除工作站(数据库)",
            },
          ],
        },
        {
          label: "menu",
          title: "充电桩",
          item: [
            {
              name: "去充电桩(id)",
            },
            {
              name: "去充电桩(给定)",
            },
            {
              name: "机器人位置添加充电桩",
            },
            {
              name: "手动添加充电桩",
            },
            {
              name: "序号删除充电桩",
            },
            {
              name: "手动删除充电桩",
            },
            {
              name: "序号删除充电桩(数据库)",
            },
            {
              name: "手动删除充电桩(数据库)",
            },
          ],
        },
        {
          label: "menu",
          title: "虚拟墙",
          item: [
            {
              name: "载入虚拟墙(id)",
            },
            {
              name: "从地图去除虚拟墙(id)",
            },
            {
              name: "数据库去除虚拟墙(id)",
            },
            {
              name: "从地图去除虚拟墙",
            },
            {
              name: "数据库去除虚拟墙（位置)",
            },
            {
              name: "添加新虚拟墙",
            },
            {
              name: "添加虚拟点",
            },
            {
              name: "删除虚拟点",
            },
            {
              name: "结束添加虚拟墙并保存",
            },
          ],
        },
        {
          label: "menu",
          title: "默认地图",
          item: [
            {
              name: "设置为默认地图",
            },
            {
              name: "加载默认地图",
            },
          ],
        },
        {
          label: "button",
          title: "视角变换",
        },
        {
          label: "menu",
          title: "保存设置",
          item: [
            {
              name: "保存配置",
            },
            {
              name: "另存为",
            },
          ],
        },
        {
          label: "menu",
          title: "导航操作",
          item: [
            {
              name: "开始导航",
            },
            {
              name: "终止导航",
            },
          ],
        },
        {
          label: "button",
          title: "上传地图",
          link: "/api/map/upload",
        },
        {
          label: "button",
          title: "下载此地图",
          link: "/api/map/download",
        },
      ],
    };
  },
  components: {
    Framework,
    Resource,
    Workspace,
    States,
  },
  mixins: [rosInitMixin, getDataMixin],

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
        path: "/login",
      });
    },
  },
};
</script>

<style scoped>
@import "../assets/css/base.css";

html,
body {
  height: 100%;
  margin-top: 0;
}
.navigation {
  height: 100%;
}
.el-main {
  height: 100%;
}
.el-main .main {
  height: 100%;
  /* margin-left: 0px; */
  /* margin-right: 0px; */
}
.main-show {
  position: relative;
}
.map {
  margin-left: 110px;
}
</style>
