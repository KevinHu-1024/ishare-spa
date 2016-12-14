<template>
  <li class="card">
    <h3>{{title}}</h3>
    <p>{{author}}</p>
    <p>{{date}}</p>
    <slot></slot>
  </li>
</template>
<script>
  export default {
    data() {
      return {
        rate: null,
      };
    },
    props: ['title', 'author', 'date'],
  };
</script>
<style scoped>
  .card {
    /*display: inline-block;
    width: 280px;
    margin: 15px;
    transform: translate3d(0,0,0);
    transition: all 218ms;
    list-style: none;
    border-radius: 4px;*/
    cursor: pointer;
  }
  /*.card:hover {
    transform: translate3d(0,-5px,0);
    box-shadow: 0 7px 21px rgba(0,0,0,.15);
  }*/
</style>