<template>
    <div id="nav">
      <router-link to="/">每日推荐</router-link>
      <router-link to="/homeHot">热歌榜</router-link>
      <router-link to="/homeSearch">搜索</router-link>
    </div>
</template>
<script>
export default {
    name:'Nav',
}
</script>




<style lang="less" scoped>
@red: #d43c33;
#nav {
  height: 34px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid rgba(221, 220, 220, 0.4);
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    display: block;
    height: 34px;
    line-height: 34px;
    box-sizing: border-box;
    padding: 0 5px;

    &.router-link-exact-active {
      color: @red;
      border-bottom: 2px solid @red;
    }
  }
}
    
</style>