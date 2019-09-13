import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/databinding',
      name: 'databinding',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "databinding" */ './views/DataBinding.vue'),
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('./views/Events.vue'),
    },
    {
      path: '/events-complete',
      name: 'events-complete',
      component: () => import('./views/Events-Complete.vue'),
    },
    {
      path: '/conditionals',
      name: 'conditionals',
      component: () => import('./views/Conditionals.vue'),
    },
    {
      path: '/components',
      name: 'componentView',
      component: () => import('./views/Components.vue'),
    },
    
  ],
});
