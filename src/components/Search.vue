<template>
  <div>
    <tabs>
      <tab title="Items">
        <v-data-table
        :headers="headers"
        :items='filteredItems'
        :items-per-page="10"
        class="elevation-1"
        dark
        >
          <template v-slot:item.Title="{ item }">
            <router-link :to="`/item=${item.id}/${item.Title}`">{{ item.Title }}</router-link>
          </template>
        </v-data-table>
      </tab>
      <tab title="NPCs">
        <v-data-table
        :headers="headers"
        :items='filteredCreatures'
        :items-per-page="10"
        class="elevation-1"
        dark
        >
          <template v-slot:item.Title="{ item }">
            <router-link :to="`/npc=${item.id}/${item.Title}`">{{ item.Title }}</router-link>
          </template>
        </v-data-table>
      </tab>
      <tab title="Quests">
        <v-data-table
        :headers="headers"
        :items='filteredQuests'
        :items-per-page="10"
        class="elevation-1"
        dark
        >
          <template v-slot:item.Title="{ item }">
            <router-link :to="`/quest=${item.id}/${item.Title}`">{{ item.Title }}</router-link>
          </template>
        </v-data-table>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import vuetify from 'vuetify';

import Tab from './Tab.vue';
import Tabs from './Tabs.vue';

const axios = require('axios')

export default {
  name: 'Search',
  components: {
    Tab,
    Tabs,
  },
  data() {
    return {
      searchResults: {},
      filteredItems: [],
      filteredCreatures: [],
      filteredQuests: [],
      headers: [
        {
          text: 'Name',
          align: 'start',
          value: 'Title'
        },
      ]
    }
  },
  methods: {
    getSearchResults() {
      console.log(this.$route.query.q)
      axios.get(`http://localhost:3000/search?q=${this.$route.query.q}`)
        .then(response => {
          this.searchResults=response.data
          this.filterItems()
          this.filterCreatures()
          this.filterQuests()
        })
    },
    filterItems() {
      this.searchResults.filter(obj => {
        if(obj.type === 'item') {
          this.filteredItems.push({ Title: obj.Title, id: obj.id, type: obj.type })
        }
      });
    },
    filterCreatures() {
      this.searchResults.filter(obj => {
        if(obj.type === 'npc') {
          this.filteredCreatures.push({ Title: obj.Title, id: obj.id, type: obj.type })
        }
      })
    },
    filterQuests() {
      this.searchResults.filter(obj => {
        if(obj.type === 'quest') {
          this.filteredQuests.push({ Title: obj.Title, id: obj.id, type: obj.type })
        }
      })
    }
  },
  mounted() {
    this.getSearchResults();
  }
}
</script>

<style>
tbody tr:nth-of-type(odd) {
  background-color: rgb(48, 48, 48);
}
</style>