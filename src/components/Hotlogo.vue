// 热歌榜    头部
<template>
    <div class="hotlogo">
        <div></div>
        <p>更新时间：{{mouths+1}}月{{day}}</p>
    </div>
</template>
<script>
export default {
    name:'Hotlogo',
    data() {
        return {
            mouths:new Date().getMonth(),
            day:new Date().getDate()
        }
    },
}
</script>
<style lang="less" scope>
.hotlogo{
    width: 100%;
    height: 140px;
    background: url('https://s3.music.126.net/mobile-new/img/hot_music_bg_3x.jpg?2bfefd3ba37eaffbd66b7d108b9de26a=');
    background-size: contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    div{
        width: 142px;
        height: 67px;
        background: url('https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=');
        background-position: -24px -30px;
        background-size: 166px 97px;
    }
    p{
        color: aliceblue;
        margin-top: 10px;
        font-size: 12px;

    }
}
</style>