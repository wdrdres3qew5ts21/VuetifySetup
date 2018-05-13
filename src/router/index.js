import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/content/Home';
import News from '@/components/content/News';
import Tournament from '@/components/content/Tournament';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/News',
      name: 'News',
      component: News,
    },
    {
      path: '/Tournament',
      name: 'Tournament',
      component: Tournament,
    },
  ],
});
