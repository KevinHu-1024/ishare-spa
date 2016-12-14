<template>
  <li class="card" @click="bocastClick(info)">
    <h3>{{info.title}}</h3>
    <p>{{info.author}}</p>
    <p>{{info.date}}</p>
    <p>{{info.thumbCount}}赞</p>
    <button @click.stop="bocastThumb(info)">Thumb</button>
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

    props: ['info'],

    methods: {
      bocastClick(info) {
        this.$emit('card-click', info);
      },

      bocastThumb(info) {
        this.$emit('card-thumb', info);
      },
    },
  };
</script>
<style scoped>
  .card {
    display: inline-block;
    width: 280px;
    margin: 15px;
    transform: translate3d(0,0,0);
    transition: all 218ms;
    list-style: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .card:hover {
    transform: translate3d(0,-5px,0);
    box-shadow: 0 7px 21px rgba(0,0,0,.15);
  }
</style>