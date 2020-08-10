<template>
  <div class="maps-show">
    <el-table
      :data="table_data"
      v-show="table_data&&table_data.length"
      style="width: 100% font-size:10px"
      max-height="450"
      :row-class-name="tableRowClassName"
    >
      <el-table-column
        v-for="(item,index) in table_head "
        :key="index"
        :fixed="index===0"
        :prop="item.field"
        :label="item.title"
        style="font-size: 10px"
      ></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small">载入</el-button>
          <el-button type="text" size="small">删除</el-button>
          <el-button type="text" size="small">查阅</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "MapsShow",
  data() {
    return {
      table_head: [
        {
          field: "id",
          title: "ID",
        },
        {
          field: "name",
          title: "名字",
        },
        {
          field: "map_name",
          title: "地图名字",
        },
      ],
      table_data: [
        {
          id: 18,
          name: "h215_27",
          map_name: "h210_27",
        },
        {
          id: 11,
          name: "h214_27",
          map_name: "h210_27",
        },
        {
          id: 12,
          name: "h213_27",
          map_name: "h210_27",
        },
        {
          id: 13,
          name: "h211227",
          map_name: "h210_27",
        },
        {
          id: 14,
          name: "h211_27",
          map_name: "h210_27",
        },
      ],
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex%2=== 1) {
        return "warning-row";
      } else  {
        return "success-row";
      }

    },
  },
};
</script>

<style scoped>
   .warning-row {
    background-color: oldlace;
  }
  .el-table{
    font-size: 12px;
    /* position: relative;
    z-index: 9; */
  }

   .success-row {
    background-color: #f0f9eb;
  }
</style>
