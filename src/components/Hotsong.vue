// 热歌榜     热歌歌曲列表
<template>
  <div class="hotsong">
    <a v-for="(hotsong, index) in hotsongs" :key="index">
      <span>{{index}}</span>
      <h3>{{hotsong.name}}</h3>

      <div>
        <i class="fa fa-play-circle-o"></i>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: "Hotsong",
  data() {
    return {
      hotsongs: []
    };
  },

  beforeCreate() {
    this.axios
      .get("http://music.kele8.cn/personalized/newsong")
      .then(response => {
        //   console.log(response);
          
        this.hotsongs = response.data.result;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style lang="less" scope>
.hotsong {
  margin: 10px;
  a {
    display: flex;
    position: relative;
   
    justify-content: space-between;
    border-bottom: 1px solid #eee;
  }
  h3 {
    font-size: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 300px;
    line-height: 30px;
    padding-left: 10px;
  }
  span {
    display: block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #d43c33;
    font-size: 18px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    font-size: 18px;
  }
}
</style>