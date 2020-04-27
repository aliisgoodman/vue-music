// 热歌榜   
<template>
  <div class="homehot">
    <Nav></Nav>
      <Hotlogo></Hotlogo>
      <Hotsong></Hotsong>
  </div>
</template>
<script>
import Hotlogo from "@/components/Hotlogo.vue";
import Nav from "@/components/Nav.vue";
import Hotsong from "@/components/Hotsong.vue";

export default {
  name: "Home",
  components: {
    Hotlogo,
    Hotsong,Nav
  }
};
</script>
<style lang="less" scoped>
.homehot {
  margin: 10px 0;
}
</style>