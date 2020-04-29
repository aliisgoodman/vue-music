<template>
  <div>
    <div class="playui"  @click="showbigplay=!showbigplay">
      <img :src="title.picUrl" :class="{active:showplay}" />
      <h3>{{title.name}}</h3>
      <div @click.stop="showplay=!showplay">
        <canvas width="40" height="40" id="canvas"></canvas>
        <i class="fa fa-pause" v-if="showplay"></i>
        <i class="fa fa-play" v-else></i>
      </div>
      <p>列表</p>
    </div>

    <div class="bigplayui" v-show="showbigplay">
      <div class="mask" :style="{background:`url(${title.picUrl})`}"></div>
      <p >
        <i class="fa fa-hand-o-left" @click="showbigplay=!showbigplay"></i>
      </p>
      <div>
        <span></span>
        <div :class="{active:showbigplay}">
          <img :src="title.picUrl" />
        </div>
      </div>

      <div>
        <ul><li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li></ul>
        <div>
        <input type="range" min="0" max="100">
        <p><a>aaaaaaa</a></p>
        </div>
        <ol>
        <li>yyyy</li>
        <li>yyyy</li>
        <li>yyyyy</li>
        </ol>
      </div>
    </div>

    <audio :src="songurlid" autoplay></audio>
  </div>
</template>

<script>
export default {
  name: "PlayUi",
  data() {
    return {
      showplay: true,
      showbigplay: false
    };
  },
  props: ["title"],
  computed: {
    songurlid() {
      return `https://music.163.com/song/media/outer/url?id=${this.title.id}.mp3`;
    }
  },

  watch: {
    showplay(showplay) {
      // let audio = this.$el.querySelector("audio");
      let audio = this.$el.getElementsByTagName("audio")[0];

      if (showplay) {
        audio.play();
      } else {
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
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.bigplayui {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    background-size: 100%;
    background-position: center;
    height: 100%;
    width: 100%;
    transform: scale(2);
    z-index: -1;
    filter: blur(15px) brightness(0.8);
  }
  div:nth-of-type(2) {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      background: url("../assets/needle-ip6.png");
      background-size: 100%;
      background-repeat: no-repeat;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 50%;
      display: block;
      width: 80px;
      height: 150px;
      transform: rotate(0deg);
      transform-origin: 0 0;
      transition: all 0.3s;
      &.active {
        transform: rotate(-20deg);
      }
    }
    div {
      background: url("../assets/disc_light-ip6.png"),
        url("../assets/disc_default.png");
      background-size: 100%;
      width: 296px;
      height: 296px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: rotate 8s linear infinite;
      animation-play-state: running;
      &.active {
        animation-play-state: paused;
      }
      img {
        width: 186px;
        height: 186px;
        vertical-align: middle;
        border-radius: 50%;
      }
    }
  }
  div:nth-of-type(3) {
    height: 200px;
    background: lightgreen;
    ul{
      display: flex;
      justify-content: space-between;
      li{

      }
    }
    div{
      input{

      }
      p{
        a{

        }
      }
    }
    ol{
      list-style: none;
      display: flex;
      justify-content: space-between;
      li{

      }
    }
  }
  p {
    font-size: 24px;
    height: 1.5em;
    line-height: 1.5em;
    i {
      color: lightsalmon;
      margin-left: 10px;
    }
  }
}

.playui {
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  background-color: lightyellow;
  position: fixed;
  bottom: 0;
  left: 0;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    animation: rotate 8s linear infinite;
    animation-play-state: paused;
    &.active {
      animation-play-state: running;
    }
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