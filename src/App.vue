<template>
  <div id="app">
    <top-header></top-header>
    <dashboard></dashboard>
  </div>
</template>

<script>
  import TopHeader from './components/TopHeader';
  import Dashboard from './components/Dashboard';

  export default {
    name: 'app',
    components: {
      TopHeader,
      Dashboard,
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
