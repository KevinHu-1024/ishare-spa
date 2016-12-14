import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import DashBoard from './containers/Dashboard';
import About from './containers/About';

const routes = [
  {
    path: '/',
    component: App,
    children: [
      { path: '/', component: DashBoard },
      { path: '/about', component: About },
    ],
  },
];

const router = new VueRouter({ routes });

Vue.use(VueRouter);

export default router;
