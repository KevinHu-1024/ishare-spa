import Vue from 'vue';
import Dashboard from 'src/components/Dashboard';

describe('Dashboard.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Dashboard),
    });
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App');
  });
});
