// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App';
import router from './router';

var VueMoment = require('vue-moment');
var VueScrollTo = require('vue-scrollto');

Vue.use(VeeValidate);
Vue.use(VueScrollTo);
Vue.use(VueMoment);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
