<template>
  <div id="app" @touchstart="touchstart" @touchend="touchend">
    <router-view />
    <audio :src="songurlid" style="height:60px;width:100%" controls v-if="songid!=null" autoplay></audio>
  </div>
</template>
<script>
export default {
  data() {
    return {
      touchstartx:0,
      songid:null,
    }
  },
  computed: {
    songurlid(){
      return `https://music.163.com/song/media/outer/url?id=${this.songid}.mp3`
    }
  },
  methods: {
    touchstart(event) {
      this.touchstartx=event.changedTouches[0].clientX
    },
    touchend(event) {
      if (event.changedTouches[0].clientX-this.touchstartx>80) {
        this.$router.back()
      }
      
    },

  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
audio{
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
