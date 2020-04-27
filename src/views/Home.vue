// 每日推荐版块

<template>
  <div class="home">
    <!-- 歌单推荐 -->
    <Nav></Nav>
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
import Nav from "@/components/Nav.vue";


export default {
  name: "Home",
  components: {
    HomeTitle,
    Songscard,
    Songlist,
    Nav
  }
};
</script>
<style lang="less" scoped>
.home {
  margin: 10px 0;
  .songslists{
  margin-top: 10px;

  }
}

</style>