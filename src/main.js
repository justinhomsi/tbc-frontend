import Vue from 'vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import App from './App.vue';
import Search from './components/Search.vue';
import Home from './components/Home.vue';
import Blue from './components/Blue.vue';
import Notes from './components/Notes.vue';
import Original from './components/Original.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/blue',
      component: Blue
    },
    {
      path: '/notes',
      component: Notes
    },
    {
      path: '/notes/original',
      component: Original
    }
  ]
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
