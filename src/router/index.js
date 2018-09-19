import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Contact from '@/components/Contact';
import Sponsor from '@/components/Sponsor';
import Apply from '@/components/Apply';
import MinorWaiver from '@/components/MinorWaiver';
import NotFound from '@/components/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: function () {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/sponsor',
      name: 'Sponsor',
      component: Sponsor,
    },
    {
      path: '/apply',
      name: 'Apply',
      component: Apply
    },
    {
      path: '/minor-waiver',
      name: 'MinorWaiver',
      component: MinorWaiver
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ],
});
