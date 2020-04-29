<template>
  <div>
    <div class="playui">
      <img :src="title.picUrl" />
      <h3>{{title.name}}</h3>
      <div @click="showi=!showi">
        <canvas width="40" height="40" id="canvas"></canvas>
        <i class="fa fa-pause" v-if="showi"></i>
        <i class="fa fa-play" v-else></i>
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
      showi: true
    };
  },
  props: ["title"],
  computed: {
    songurlid() {
      return `https://music.163.com/song/media/outer/url?id=${this.title.id}.mp3`;
    }
  },
  watch: {
    showi(a) {
      // let audio = this.$el.querySelector("audio");
      let audio = this.$el.getElementsByTagName("audio")[0];

      if (a) {
        audio.play();
        console.log("xxx");
      } else {
        console.log("bbbbb");
        audio.pause();
      }
    }
  },
  mounted() {
    /** @type {HTMLCanvasElement} */
    // let contt=this.$el.getElementById("canvas")  报错，getElementById('canvas') is not a function

    let a = this.$el.querySelector("#canvas"); //这个可以
    let context = a.getContext("2d");
    let audio = this.$el.querySelector("audio");
    // context.beginPath();
    // context.strokeStyle = "gray";
    // context.arc(20, 20, 18, 0, 2 * Math.PI);
    // context.stroke();
    // context.closePath();
    audio.ontimeupdate = function() {
      context.clearRect(0, 0, 40, 40);
      context.beginPath();
      context.strokeStyle = "gray";
      context.arc(20, 20, 18, 0, 2 * Math.PI);
      context.stroke();
      context.closePath();
      // currentTime   duration
      // 画圆
      context.beginPath();
      context.strokeStyle = "#d43c33";
      context.arc(
        20,
        20,
        18,
        -0.5 * Math.PI,
        -0.5 * Math.PI + 2 * Math.PI * (this.currentTime / this.duration)
      );
      context.stroke();
    };
  }
};
</script>
<style lang="less" scoped>
.playui {
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  background-color: lightyellow;
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