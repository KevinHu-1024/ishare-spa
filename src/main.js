import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import router from './routes';

Vue.use(ElementUI);

/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
const app = new Vue({
  router,
}).$mount('#app');
