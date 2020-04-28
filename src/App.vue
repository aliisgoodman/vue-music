<template>
  <div id="app" @touchstart="touchstart" @touchend="touchend" :class="{active:songid!=null}">
    <router-view />
    <PlayUi :title="songid" v-if="songid!=null"></PlayUi>
    
  </div>
</template>
<script>
import PlayUi from "@/components/PlayUi.vue";

export default {
  data() {
    return {
      touchstartx: 0,
      songid: null
      // .id是歌曲id。.picUrl是歌曲图片。
    };
  },
  components: {
    PlayUi
  },
  

  methods: {
    touchstart(event) {
      this.touchstartx = event.changedTouches[0].clientX;
    },
    touchend(event) {
      if (event.changedTouches[0].clientX - this.touchstartx > 80) {
        this.$router.back();
      }
    }
  }
};
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.active {
  padding-bottom: 55px;
}

</style>
