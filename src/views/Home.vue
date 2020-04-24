<template>
  <div class="home">
    <div class="songslists">
      <HomeTitle>每日歌单</HomeTitle>
      <div>

      </div>

    </div>
    <div class="songlists">
      <HomeTitle>每日歌曲</HomeTitle>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HomeTitle from "@/components/HomeTitle.vue";

export default {
  name: "Home",
  data() {
    return {
      songslists:[],
    }
  },
  components: {
    HomeTitle
  },
  beforeCreate() {
    this.axios
      .get("http://music.kele8.cn/personalized")
      .then(function(response) {
        // handle success
        // copywriter 编辑推荐  name 名字  picUrl图片
        console.log(response.data.result);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
};
</script>
