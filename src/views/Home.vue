// 每日推荐版块

<template>
  <div class="home">
    <!-- 歌单推荐 -->
    <div class="songslists">
     
        <HomeTitle>推荐歌单</HomeTitle>
        <Songscard></Songscard>
     
    </div>
    <!-- 歌曲推荐 -->
    <div class="songlists">
        <HomeTitle>最新音乐</HomeTitle>
        <Songlist></Songlist>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HomeTitle from "@/components/HomeTitle.vue";
import Songscard from "@/components/Songscard.vue";
import Songlist from "@/components/Songlist.vue";

export default {
  name: "Home",
  components: {
    HomeTitle,
    Songscard,
    Songlist
  }
};
</script>
<style lang="less" scope>
.home {
  margin: 10px 0;
}
</style>