<template>
  <el-row class="container">
    <user-item :type="'login'" />
  </el-row>
</template>

<script>
import UserItem from "components/content/UserItem";
export default {
  data() {
    return {};
  },
  components: {
    UserItem,
  },
  methods: {},
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
