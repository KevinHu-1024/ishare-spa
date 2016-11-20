<template>
  <div class="dashboard">
    <ul>
      <li v-for="share in list">
        <p>{{share.title}}</p>
        <p>{{share.author}}</p>
        <p>{{share.date}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {
      list: [
        {
          title: 'Effective Javascript',
          author: 'Kevin Hu',
          date: '2016-11-11',
        },
        {
          title: 'Redux Introduction',
          author: 'Cagen',
          date: '2016-11-12',
        },
      ],
    };
  },
};
</script>
<style scope>
  .dashboard {
    margin-top: 30px;
  }
</style>
