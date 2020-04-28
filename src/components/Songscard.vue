//  每日推荐版块  每日歌单推荐模板
<template>
  <div class="songcard">
    <a v-for="(songscard, index) in songscards" :key="index" @click="handle(songscard.id)">
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
      }
      if (num > 10000) {
        return (num / 10000).toFixed(1) + "万";
      } else {
        return num;
      }
    },
    handle(id) {
      this.$router.push({ path: "/songsarddetails", query: { id: id } });
    }
  },

  created() {
    let songsStorage = JSON.parse(window.localStorage.getItem("songscards"));
    if (songsStorage && songsStorage.time > new Date().getTime()) {
      // let a = window.Math.floor(
      //   window.Math.random() * (songsStorage.songscardsdata.length - 6)
      // );
      // this.songscards = songsStorage.songscardsdata.slice(a, a + 6);
      this.songscards = songsStorage.songscardsdata.slice(1, 7);
    } else {
      this.axios
        .get("http://music.kele8.cn/personalized")
        .then(response => {
          // this.songscards=response.data.result.slice(1, 7);
          window.localStorage.setItem(
            "songscards",
            JSON.stringify({
              time: new Date().getTime() + 1 * 60 * 60 * 1000,
              songscardsdata: response.data.result
            })
          );
          this.songscards = JSON.parse(
            window.localStorage.getItem("songscards")
          ).songscardsdata.slice(1, 7);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="less" scoped>
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
