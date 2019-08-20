<template>
  <div id="app">
    <p>首页</p>
    <router-link to='/index'>主页</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to='/product/1'>产品</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to='/product/2'>手机</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to='/product/3'>生活用品</router-link>
    <!-- 9添加router-view视图展示区域 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
</style>
