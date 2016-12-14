<template>
  <nav class="top-header">
    <img src="../assets/logo.png">
    <h1 class="title">爱晒</h1>
    <p>轻量的团队分享管理工具</p>
    <nav-menu></nav-menu>
  </nav>
</template>
<script>
  import NavMenu from '../components/NavMenu';

  export default {
    data() {
      return {};
    },
    components: {
      NavMenu,
    },
  };
</script>
<style scope>
  .top-header {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    font-size: 18px;
    z-index: 2;
    background-color: white;
    user-select: none;
    -webkit-user-select: none;

    box-shadow: 0px 1px 1px 0px rgba(0,0,102,0.1);
  }

  .top-header>img {
    width: 60px;
    border: 2px solid white;
    border-radius: 10px;
    box-shadow: 0px 0px 4px grey;
    margin: 10px 15px;
    position: absolute;
  }

  .top-header .title {
    margin-left: 90px;
  }
  .top-header>h1 {
    display: inline-block;
    margin: 0 5px;
    line-height: 50px;
    color: #00AD7C;
  }

  .top-header>p {
    display: inline-block;
    margin: 0 5px;
    line-height: 50px;
    color: #52D681;
    font-size: 12px;
  }
</style>
