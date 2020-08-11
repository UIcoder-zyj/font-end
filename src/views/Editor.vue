<template>
  <framework class="container" current_index='1'>
    <div slot="main">
      <span>editor Main</span>
    </div>

    <div slot="footer">
      <span>editor footer</span>
    </div>
  </framework>
</template>

<script>
import Framework from "components/content/Framework";
export default {
  name: "Editor",
  components: {
    Framework,
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
.container {
  text-align: center;
  height: 100%;
}

</style>
