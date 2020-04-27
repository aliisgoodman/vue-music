//  歌单推荐  歌单推荐的详情
  <template >
  <div>
    <div class="songsarddetails">
      <b :style="{background:`url(${playlists.coverImgUrl})`}"></b>
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

    <div class="middle">
      <p>
        标签：
        <span v-for="(tag, index) in playlists.tags" :key="index">{{tag}}</span>
      </p>
      <div :class="{active:show}">简介：{{playlists.description}}</div>
      <a @click="show=!show">
        <i class="fa fa-sort-asc" v-if="show"></i>
        <i class="fa fa-sort-desc" v-else></i>
      </a>
    </div>

    <div class="bottom">
      <p>歌曲列表</p>
      <ul>
        <li v-for="(track, index) in playlists.tracks" :key="index">
          <span>{{index}}</span>
          <div class="div1">
            <div>
              <h3>{{track.name}} {{track.alia[0]}}</h3>
            </div>
            <p>{{track.ar[0].name}}-{{track.al.name}}</p>
          </div>
          <a>
            <i class="fa fa-play-circle-o"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// playlists.description  简介   tags 标签
// tracks 歌曲  ar[0].name歌手，  .name歌曲名，  al.name专辑。
export default {
  name: "Songsarddetails",
  data() {
    return {
      id: this.$route.query.id,
      show: false,
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
  color: white;
  padding: 25px 15px;
  position: relative;
  overflow: hidden;
  b {
    filter: blur(5px) brightness(0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform: scale(1.2);
  }

  ul {
    display: flex;

    li:nth-child(1) {
      position: relative;
      flex: 4;
      font-size: 12px;

      img {
        width: 100%;
      }
      div {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
      p {
        text-align: right;
      }
      span {
        padding: 0 3px 0 10px;
        background: red;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
    li:nth-child(2) {
      flex: 6;
      padding-left: 15px;
      h3 {
        font-size: 16px;
        margin: 20px 0 25px 0;
      }
      img {
        width: 30px;
        border-radius: 50px;
        vertical-align: middle;
      }
      a {
        font-size: 12px;
        margin-left: 10px;
      }
    }
  }
}

.middle {
  padding: 0 15px;
  p {
    margin: 10px 0 20px 0;
    span {
      margin-right: 10px;
      font-size: 14px;
      padding: 2px 5px;
      border-radius: 30%;
      border: 1px solid lightgray;
    }
  }
  div {
    white-space: pre-wrap;
    font-size: 14px;
    line-height: 1.2em;
    height: 3.6em;
    overflow: hidden;
    &.active {
      height: auto;
    }
  }
  a {
    display: block;
    text-align: right;
  }
}

.bottom {
  &>p{
    padding: 3px 0 3px 15px;
    background: #eee;
    font-size: 14px;
  }
  ul {
    li {
      display: flex;
      margin: 10px 0;
      span {
        display: flex;
        align-items: center;
        text-align: center;
        padding: 0 15px;
      }
      .div1 {
        flex: 1;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        h3 {
          font-size: 18px;
        }
        p {
          font-size: 12px;
          color: gray;
        }
      }
      a {
        display: flex;
        align-items: center;
        font-size: 20px;
        margin-right: 10px;
        padding: 0 10px;
      }
    }
  }
}
</style>