// 每日推荐   每日歌曲推荐模板
<template>
  <div class="songlist">
    <a v-for="(songlist, index) in songlists" :key="index">
      <h3>{{songlist.name}}</h3>

      <span>
        <i class="fa fa-play-circle-o"></i>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Songlist",
  data() {
    return {
      songlists: []
    };
  },

  beforeCreate() {
    this.axios
      .get("http://music.kele8.cn/personalized/newsong")
      .then(response => {
        this.songlists = response.data.result;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="less" scope>
.songlist {
    margin: 10px;
  a {
    display: flex;
    position: relative;
    padding:5px 10px;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
  }
  h3 {
    font-size: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  span {
    font-size: 18px;
  }
}
</style>