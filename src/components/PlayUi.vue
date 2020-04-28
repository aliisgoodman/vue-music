<template>
  <div >
    <div class="playui">
      <img :src="title.picUrl" />
      <h3>{{title.name}}</h3>
      <div>
        <canvas width="40" height="40" id="canvas"></canvas>
        <i class="fa fa-play" v-if="showi"></i>
        <i class="fa fa-pause" v-else></i>
      </div>
      <p>列表</p>
    </div>
    <audio :src="songurlid" style="height:60px;width:100%" controls v-if="title!=null" autoplay></audio>
  </div>
</template>

<script>
export default {
  name: "PlayUi",
  data() {
      return {
          showi:false
      }
  },
  props: ["title"],
  computed: {
    songurlid() {
      return `https://music.163.com/song/media/outer/url?id=${this.title.id}.mp3`;
    }
  },
  mounted() {
      console.log(this.$el);
      
  },
  
};
</script>
<style lang="less" scoped>
.playui {
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  background-color: lightgreen;
  position: fixed;
  bottom: 60px;
  left: 0;
  img {
    width: 40px;
    height: 40px;
  }
  h3 {
    flex: 1;
    padding-left: 10px;
  }
  div {
    height: 40px;
    width: 40px;
    position: relative;

    i {
      position: absolute;
      top: 14px;
      left: 14px;
      font-size: 12px;
    }
  }
  p {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
  }
}
audio {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>