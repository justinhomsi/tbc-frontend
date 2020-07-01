import Vue from 'vue'
import vuetify from 'vuetify'
Vue.use(vuetify)
const axios = require('axios')

window.onload = function () {
  new Vue ({
    vuetify: new vuetify,
    el: '#app',
    data: {
      query: '',
    },
  
    methods: {
      search: function(query) {
        axios.get('localhost:3000/search?q=:query')
      }
    }
  })
}


export default {
  name: "Search",
  Methods: {
    search() {return '';}
  }
}