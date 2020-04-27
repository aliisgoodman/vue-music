<template>
    <div class="hometitle">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'HomeTitle'
}
</script>
<style lang="less" scoped>
    .hometitle{
        border-left: 2px solid #d43c33;
        font-size: 14px;
        line-height: 14px;
        padding-left: 10px;
    }
</style>