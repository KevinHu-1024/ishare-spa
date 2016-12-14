<template>
  <div class="menu">
    <a href="javascript:;">分享列表</a>
    <a href="javascript:;">发布分享</a>
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
