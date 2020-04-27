//  歌单推荐  歌单推荐的详情
<template>
  <div class="songsarddetails">
    <ul>
      <li>
        <img :src="playlists.coverImgUrl" />
        <div>
          <p>
            <i class="fa fa-headphones"></i>
            {{playCount(playlists.playCount)}}
          </p>
          <span>歌单</span>
        </div>
      </li>
      <li>
        <h3>{{playlists.name}}</h3>
        <img :src="playlists.creator.avatarUrl" alt />
        <a>{{playlists.creator.nickname}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Songsarddetails",
  data() {
    return {
      id: this.$route.query.id,
      playlists: null
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
    }
  },
  created() {
    //     let songsStorage = JSON.parse(window.localStorage.getItem("songscards"));
    // if (songsStorage && songsStorage.time > new Date().getTime()) {
    //   let a = window.Math.floor(
    //     window.Math.random() * (songsStorage.songscardsdata.length - 6)
    //   );
    //   this.songscards = songsStorage.songscardsdata.slice(a, a + 6);
    // } else {
    this.axios
      .get(`https://music.kele8.cn/playlist/detail?id=${this.id}`)
      .then(response => {
        console.log(response.data.playlist);
        //   h3==name     img==coverImgUrl    span==creator.avatarUrl   a==creator.nickname
        this.playlists = response.data.playlist;

        // window.localStorage.setItem(
        //   "songscards",
        //   JSON.stringify({
        //     time: new Date().getTime() + 1 * 60 * 60 * 1000,
        //     songscardsdata: response.data.result
        //   })
        // );
        // this.songscards = JSON.parse(
        //   window.localStorage.getItem("songscards")
        // ).songscardsdata.slice(1, 7);
      })
      .catch(error => {
        console.log(error);
      });
    // }
  }
};
</script>
<style lang="less" scoped>
.songsarddetails {
  // color: white;

  ul {
    display: flex;

    li:nth-child(1) {
      flex: 4;
      position: relative;
      img {
        width: 100%;
      }
      div {
          width: 100%;

        position: absolute;
        top: 0;
        left: 0;
      }
      p{
        text-align: right;

      }
      span {
        
      }
    }
    li:nth-child(2) {
      flex: 4;

      h3 {
      }
      img {
      }
      a {
      }
    }
  }
}
</style>