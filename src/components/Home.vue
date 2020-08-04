<template>
  <v-container fluid>
    <VueTitle title="Untitled Project"></VueTitle>
    <v-row align="center" justify="start">
      <v-data-table
        :headers="headers"
        :items="bluePosts"
        :items-per-page="5"
        class="elevation-1 blueposts"
        dark
        dense
        disable-sort
        :hide-default-footer="true">
        <template v-slot:item.title="{ item }">
          <a :href="createURL(item.url)" target="_blank" :title="item.excerpt">{{ item.title }}</a>
        </template>
        <template v-slot:footer>
          <v-layout>
            <v-flex class="text-right">
              <router-link style="color:green; padding: 0px 5px 0px 0px" :to="'/blue'">Go to Blue Tracker >></router-link>
            </v-flex>
          </v-layout>
        </template>
      </v-data-table>
    </v-row>
  </v-container>
</template>

<script>
import VueTitle from './VueTitle.vue';
const axios = require('axios');

export default {
  name: 'Home',
  components: {
    VueTitle
  },
  data() {
    return {
      bluePosts: [],
      headers: [
        {
          text: "Recent Blue Posts",
          align: "start",
          value: "title"
        },
        {
          align: "start",
          value: "created"
        }
      ]
    }
  },
  methods: {
    getBluePosts() {
      axios.get('/blue')
      .then(response => {
        this.bluePosts = response.data.rows;
        this.bluePosts.sort(this.sortByDate);
        this.bluePosts.forEach((el) => {el.created = this.dateDifference(new Date(el.created))})
        this.bluePosts = this.bluePosts.slice(0, 5)
    });
    },
    sortByDate(a, b) {
      return new Date(b.created).getTime() - new Date(a.created).getTime();
    },
    dateDifference(postDate) {
      var now = new Date().getTime();
      var d = Math.abs(now - postDate) / 1000;
      var r = {};
      var s = {
        year: 31536000,
        month: 2592000,
        week: 604800, 
        day: 86400,   
        hour: 3600,
        minute: 60,
        second: 1
      };

      Object.keys(s).forEach(function(key) {
        r[key] = Math.floor(d / s[key]);
        d -= r[key] * s[key];
      });

      if (r.year > 0) {
        if (r.year > 1) {
          return r.year + " Years Ago"
        } else {
          return r.year + " Year Ago";
        }
      } else if (r.month > 0) {
        if (r.month > 1) {
          return r.month + " Months Ago";
        } else {
          return r.month + " Month Ago";
        }
      } else if (r.week > 0) {
        if (r.week > 1) {
          return r.week + " Weeks Ago";
        } else {
          return r.week + " Week Ago";
        }
      } else if (r.day > 0) {
        if (r.day > 1) {
          return r.day + " Days Ago";
        } else {
          return r.day + " Day Ago";
        }
      } else if (r.hour > 0) {
        if (r.hour > 1) {
          return r.hour + " Hours Ago";
        } else {
          return r.hour + " Hour Ago"
        }
      } else if (r.minute > 0) {
        if (r.minute > 1) {
          return r.minute + " Minutes Ago";
        } else {
          return r.minute + " Minute Ago"
        }
      } else {
        if (r.second > 1) {
          return r.second + " Seconds Ago"
        } else {
          return r.second + " Second Ago"
        }
      }
    },
    createURL(url) {
      return new URL('/en/wow' + url, "https://us.forums.blizzard.com/");
    }
  },
  mounted() {
    this.getBluePosts()
  }
}
</script>

<style>
.blueposts thead {
  background-color: blue;
}
a {
  text-decoration: none;
}
</style>