<template>
  <v-app style="background: black; color: white">
    <v-app-bar
      app
      color="dark-grey"
      dark
      hide-on-scroll
    >
      <div class="d-flex">
        <v-row class="text-center">
          <v-col align-self="start">
            <router-link to='/' style="text-decoration: none"><h1 style="color: green;">BC</h1></router-link>
          </v-col>

          <v-col align-self="end">
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="black--text"
                  color="rgba(100, 100, 50, 1)"
                  v-bind="attrs"
                  v-on="on"
                >
                Database
                </v-btn>
              </template>
            </v-menu>
          </v-col>

          <v-col align-self="end">
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="black--text"
                  color="rgba(100, 100, 50, 1)"
                  v-bind="attrs"
                  v-on="on"
                >
                Tools
                </v-btn>
              </template>
            </v-menu>
          </v-col>

          <v-col align-self="end">
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="black--text"
                  color="rgba(100, 100, 50, 1)"
                  v-bind="attrs"
                  v-on="on"
                >
                Guides
                </v-btn>
              </template>
            </v-menu>
          </v-col>

          <v-col align-self="end">
            <v-toolbar
              dark
              width="400"
              dense
              style="position:absolute; top:8px; right:10px"
            >
              <v-form @submit.prevent="search()">
                <input style="width:300px; color:white; outline:none" type="text" v-model="searchParams" v-on:keydown.enter="search" @keyup.enter="$event.target.blur()" placeholder="Search.."/>
                <input style="color: white" id="submitButton" type="submit" value="Search"/>
              </v-form>
            </v-toolbar>
          </v-col>
        </v-row>
      </div>
    </v-app-bar>

    <v-main id="app">
      <router-view :key="this.$route.fullPath"></router-view>
    </v-main>
  </v-app>
</template>

<script>

import Vue from 'vue'
import vuetify from 'vuetify'
const axios = require('axios')

export default {
  name: 'App',

  data: () => ({
    searchParams: "",
    searchResults: null,
  }),

  methods: {
    search() {
      if (this.searchParams !== "") {
        this.$router.push(`/search?q=${this.searchParams}`)
      }
      this.searchParams = ""
    }
  }
};
</script>
