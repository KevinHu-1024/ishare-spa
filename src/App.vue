<template>
  <div>
    <top-header></top-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import TopHeader from './containers/TopHeader';

  export default {
    name: 'app',
    components: {
      TopHeader,
    },
    data() {
      return {
        user: {
          name: '',
          photoURL: '',
        },
        accessToken: '',
      };
    },
  };
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #E8F1F5;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
