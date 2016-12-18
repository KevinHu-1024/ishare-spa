<template>
  <div class="menu">
    <router-link to="/">分享列表</router-link>
    <router-link to="/">发布分享</router-link>
    <router-link to="/">我的分享</router-link>
    <router-link to="/about">我的收藏</router-link>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    components: {},
  };
</script>
<style scope>
  .menu {
    display: inline-block;
    margin: 0 60px;
    height: 50px;
  }

  .menu>a {
    display: inline-block;
    margin: 0 10px;
    height: 50px;
    line-height: 50px;
    text-decoration: none;
    color: #00AD7C;
  }

  .menu>a:hover {
    text-decoration: underline;
  }
</style>
