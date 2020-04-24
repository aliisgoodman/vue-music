// 热歌榜   
<template>
  <div class="homehot">
      <Hotlogo></Hotlogo>
      <Hotsong></Hotsong>
  </div>
</template>
<script>
import Hotlogo from "@/components/Hotlogo.vue";
import Hotsong from "@/components/Hotsong.vue";

export default {
  name: "Home",
  components: {
    Hotlogo,
    Hotsong
  }
};
</script>
<style lang="less" scope>
.home {
  margin: 10px 0;
}
</style>