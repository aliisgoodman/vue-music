<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">每日推荐</router-link>
      <router-link to="/homeHot">热歌榜</router-link>
      <router-link to="/homeSearch">搜索</router-link>
    </div>
    <router-view />
    <audio src controls></audio>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
@red: #d43c33;
#nav {
  height: 34px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
border-bottom: 2px solid rgba(221, 220, 220,.4);
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 5px;


    &.router-link-exact-active {
      color: @red;
    box-sizing: border-box;
      border-bottom: 2px solid @red;
    }
  }
}
</style>
