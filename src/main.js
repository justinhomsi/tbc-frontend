import Vue from 'vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import App from './App.vue';
import Search from './components/Search.vue';
import HelloWorld from './components/HelloWorld.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/search',
      component: Search
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
