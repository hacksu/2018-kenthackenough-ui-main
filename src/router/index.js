import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Contact from '@/components/Contact';
import Sponsor from '@/components/Sponsor';
import Apply from '@/components/Apply';
import MinorWaiver from '@/components/MinorWaiver';
import NotFound from '@/components/NotFound';
import RSVP from '@/components/RSVP';
import Live from '@/components/Live';
import Schedule from '@/components/homeComponents/Schedule';

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
      path: '/rsvp',
      name: 'RSVP',
      component: RSVP
    },
    {
      path: '/live',
      name: 'Live',
      component: Live
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    },
  ],
});
