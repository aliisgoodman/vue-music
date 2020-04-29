<template>
  <div>
    <div class="playui" @click="showbigplay=!showbigplay">
      <img :src="title.picUrl" :class="{active:showplay}" />
      <h3>{{title.name}}</h3>
      <div @click.stop="showplay=!showplay">
        <canvas width="40" height="40" id="canvas"></canvas>
        <i class="fa fa-pause" v-if="showplay"></i>
        <i class="fa fa-play" v-else></i>
      </div>
      <p>列表</p>
    </div>
    <transition name="fade">
      <div class="bigplayui" v-if="showbigplay">
        <div class="mask" :style="{background:`url(${title.picUrl})`}"></div>
        <p>
          <i class="fa fa-hand-o-left" @click="showbigplay=!showbigplay"></i>
        </p>
        <div>
          <span :class="{active:!showplay}"></span>
          <div :class="{active:!showplay}">
            <img :src="title.picUrl" />
          </div>
        </div>

        <div>
          <ul>
            <li>
              <i class="fa fa-heart"></i>
            </li>
            <li>
              <i class="fa fa-arrow-circle-down"></i>
            </li>
            <li>
              <i class="fa fa-comments-o"></i>
            </li>
            <li>
              <i class="fa fa-info-circle"></i>
            </li>
          </ul>
          <div>
            <span>{{durationgo}}</span>
            <p>
              <input type="range" min="0" max="100" value="0" v-model="number" />
              <a :style="{left:`${anumber}px`}"></a>
              <a :style="{width:`${anumber}px`}"></a>
            </p>
            <span>{{durationend}}</span>
          </div>
          <ol>
            <li>
              <i class="fa fa-step-backward"></i>
            </li>
            <li @click="showplay=!showplay">
              <i class="fa fa-play-circle-o" v-show="showplay"></i>
              <i class="fa fa-pause-circle-o" v-show="!showplay"></i>
            </li>
            <li>
              <i class="fa fa-step-forward"></i>
            </li>
          </ol>
        </div>
      </div>
    </transition>
    <audio :src="songurlid" autoplay></audio>
  </div>
</template>

<script>
export default {
  name: "PlayUi",
  data() {
    return {
      showplay: true,
      showbigplay: false,
      number: 0,
      durationend: "00:00",
      durationgo: "00:00"
    };
  },
  props: ["title"],
  computed: {
    songurlid() {
      return `https://music.163.com/song/media/outer/url?id=${this.title.id}.mp3`;
    },
    anumber() {
      return this.number < 96 ? (this.number / 100) * 240 : 230;
    }
  },

  watch: {
    title() {
      if (this.showplay===false) {
        this.showplay = !this.showplay;
      }
    },
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
    let a = this.$el.querySelector("#canvas");
    let context = a.getContext("2d");
    let audio = this.$el.querySelector("audio");

    audio.ontimeupdate = () => {
      this.durationend =
        (Math.floor(audio.duration / 60) < 10
          ? "0" + Math.floor(audio.duration / 60)
          : Math.floor(audio.duration / 60)) +
        ":" +
        Math.floor(audio.duration % 60);

      this.durationgo =
        (Math.floor(audio.currentTime / 60) < 10
          ? "0" + Math.floor(audio.currentTime / 60)
          : Math.floor(audio.currentTime / 60)) +
        ":" +
        (Math.floor(audio.currentTime % 60) < 10
          ? "0" + Math.floor(audio.currentTime % 60)
          : Math.floor(audio.currentTime % 60));

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
        -0.5 * Math.PI + 2 * Math.PI * (audio.currentTime / audio.duration)
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
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
    transform: scale(1.2);
    z-index: -1;
    filter: blur(15px) brightness(0.9);
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
    color: aliceblue;
    display: flex;
    flex-direction: column;
    ul {
      flex: 2;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        font-size: 24px;
      }
    }
    div {
      flex: 1;
      display: flex;
      align-items: center;
      span {
        padding: 5px 10px;
      }
      p {
        flex: 1;
        height: 3px;
        background: #ccc;
        position: relative;
        input {
          width: 100%;
          position: absolute;
          top: -5px;
          left: 0;
          z-index: 2;
        }
        a {
          position: absolute;
          display: block;
          top: 0;
          left: 0;
          &:nth-of-type(1) {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #fff;
            z-index: 1;
            top: -4px;
          }
          &:nth-of-type(2) {
            z-index: 0;
            width: 50%;
            height: 100%;
            background: #fff;
          }
        }
      }
    }
    ol {
      flex: 2;
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 10px;
      padding: 0 50px;
      box-sizing: border-box;
      li {
        font-size: 22px;
        &:nth-child(2) {
          font-size: 42px;
        }
      }
    }
  }
  p {
    font-size: 24px;
    height: 1.5em;
    line-height: 1.5em;
    i {
      color: #d43c33;
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