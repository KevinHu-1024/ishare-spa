<template>
  <ul class="dashboard">
    <card
      v-for="share of list"
      :title="share.title"
      :author="share.author"
      :date="share.date"
      @click="cardClick(share.id, $event)"
    >
      <button @click="cardClick(share.id)">test</button>
    </card>
  </ul>
</template>

<script>
import Card from '../components/Card';

export default {
  name: 'dashboard',
  components: { Card },
  data() {
    return {
      currentCard: null,
      list: [
        {
          title: 'Effective Javascript',
          author: 'Kevin Hu',
          date: '2016-11-11',
          id: 1,
        },
        {
          title: 'Redux Introduction',
          author: 'Cagen',
          date: '2016-11-12',
          id: 2,
        },
        {
          title: 'Effective Javascript',
          author: 'Kevin Hu',
          date: '2016-11-11',
          id: 3,
        },
        {
          title: 'Redux Introduction',
          author: 'Cagen',
          date: '2016-11-12',
          id: 4,
        },
        {
          title: 'Effective Javascript',
          author: 'Kevin Hu',
          date: '2016-11-11',
          id: 5,
        },
        {
          title: 'Redux Introduction',
          author: 'Cagen',
          date: '2016-11-12',
          id: 6,
        },
      ],
    };
  },

  methods: {
    cardClick(id, e) {
      /* eslint-disable no-console */
      this.currentCard = id;
      console.log(id, e);
    },
  },
};
</script>
<style scope>
  .dashboard {
    margin-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
  }

  /*li {
    display: inline-block;
    width: 280px;
    margin: 15px;
    transform: translate3d(0,0,0);
    transition: all 218ms;
    list-style: none;
    border-radius: 4px;
    cursor: pointer;
  }

  li:hover {
    transform: translate3d(0,-5px,0);
    box-shadow: 0 7px 21px rgba(0,0,0,.15);
  }*/
</style>
