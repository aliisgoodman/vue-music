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

  created() {
    // 做一个本地缓存数据，如果有就不用了再去请求拿数据了。
    let hotsongsStorage = JSON.parse(window.localStorage.getItem("hotsongs"));

    // 本地缓存存在而且过期时间大于当前时间，就使用本地缓存。
    if (hotsongsStorage && hotsongsStorage.time > new Date().getTime()) {
      this.hotsongs = hotsongsStorage.hotsongsdata;
      console.log("xxxx");
    } else {
      this.axios
        .get("http://music.kele8.cn/personalized/newsong")
        .then(response => {
          this.hotsongs = response.data.result;
          // 添加一个本地缓存数据，名字叫hotsongs，
          // JSON.stringify({
          // time: new Date().getTime() + 1 * 60 * 60 * 1000，意思是建立一个时间，用于清除缓存
          // hotsongsdata: response.data.result  将获取的数据赋值给hotsongsdata然后交给JSON.stringify方法转
          // 为字符串保存。
          // })
          window.localStorage.setItem(
            "hotsongs",
            JSON.stringify({
              time: new Date().getTime() + 1 * 60 * 60 * 1000,
              hotsongsdata: response.data.result
            })
          );
        })
        .catch(error => {
          console.log(error);
        });
    }
    // this.axios
    //   .get("http://music.kele8.cn/personalized/newsong")
    //   .then(response => {
    //     this.hotsongs = response.data.result;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
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