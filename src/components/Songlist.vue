  <!-- 每日推荐   每日歌曲推荐模板 -->
<template>
  <div class="songlist">
    <ul>
      <li
        v-for="(newsonglist, index) in newsonglists"
        :key="index"
        @click="getsongurl(newsonglist)"
      >
        <div>
          <h3>{{newsonglist.name}} {{newsonglist.song.alias[0]}}</h3>

          <p>
            <span></span>
            {{artists(newsonglist.song.artists)}}- {{newsonglist.song.name}}
          </p>
        </div>
        <p><a></a></p>
      </li>
    </ul>
  </div>
</template>

<script>
// .id 歌曲id    .name 歌曲名字    .song.artists歌手数组， .song.name专辑
// .song[0]副标题
export default {
  name: "Songlist",
  data() {
    return {
      newsonglists: []
    };
  },
  methods: {
    getsongurl(id) {
      this.$parent.$parent.$data.songid = id;
    },
    // 说到底还是forEach好用啊
    artists(value) {
      let arr = [];
      value.forEach(ele => {
        arr.push(ele.name);
      });

      return arr.join(" / ");
    }
  },

  created() {
    let newsonglistsStorage = JSON.parse(
      window.localStorage.getItem("newsonglists")
    );

    if (
      newsonglistsStorage &&
      newsonglistsStorage.time > new Date().getTime()
    ) {
      this.newsonglists = newsonglistsStorage.newsonglistsStorage;
    } else {
      this.axios
        .get("http://music.kele8.cn/personalized/newsong")
        .then(response => {
          window.localStorage.setItem(
            "newsonglists",
            JSON.stringify({
              time: new Date().getTime() + 1 * 60 * 60 * 1000,
              newsonglistsStorage: response.data.result
            })
          );
          this.newsonglists = JSON.parse(
            window.localStorage.getItem("newsonglists")
          ).newsonglistsStorage;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.songlist {
  margin: 10px;

  ul {
    li {
      display: flex;
      margin: 12px 0 12px 12px;

      div {
        flex: 1;

        border-bottom: 1px solid lightgrey;
        padding-bottom: 5px;
        h3 {
          width: 260px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 18px;
          margin-bottom: 3px;
        }
        p {
          font-size: 12px;
          color: gray;
          span {
            display: inline-block;
            width: 10px;
            height: 10px;
            background: url("../assets/index_icon_2x.png");
            background-size: 166px 97px;
          }
        }
      }
      &>p{
        display: flex;
        align-items: center;
        padding: 0 10px;
        a {
        display: inline-block;
        width: 22px;
        height: 22px;
        background: url('../assets/index_icon_2x.png');
        background-position: -24px 0;
        background-size: 166px 97px;
      }
      }
    }
  }
}
</style>