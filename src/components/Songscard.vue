//  每日推荐版块  每日歌单推荐模板
<template>
  <div class="songcard">
    <a v-for="(songscard, index) in songscards" :key="index">
      <div>
        <img :src="songscard.picUrl" />

        <span>
          <i class="fa fa-headphones"></i>
          {{ playCount(songscard.playCount)}}
        </span>
      </div>
      <p>{{songscard.name}}</p>
    </a>
  </div>
</template>
<script>
export default {
  name: "Songscard",
  data() {
    return {
      songscards: []
    };
  },
  methods: {
    playCount(num) {
      if (num > 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } if (num > 10000) {
        return (num / 10000).toFixed(1) + "万";
      } else {
        return num;
      }
    }
  },

  beforeCreate() {
    this.axios
      .get("http://music.kele8.cn/personalized")
      .then(response => {
        this.songscards = response.data.result.slice(0, 6);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="less" scope>
.songcard {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  a {
    display: block;

    width: 32%;
  }
  div {
    position: relative;
  }
  img {
    display: block;
  }
  span {
    position: absolute;
    top: 2px;
    right: 2px;
    color: #fff;
  }
  p {
    padding: 0 5px;
    margin: 5px 0 10px 0;
    font-size: 14px;
    line-height: 1.3em;
    height: 2.6em;
    overflow: hidden;
  }
  i {
    margin-right: 5px;
  }
}
</style>
