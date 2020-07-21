<template>
  <div>
    <tabs>
      <tab title="Items">
        <v-card dark>
          <v-card-title>
            Items
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Filter Results"
              hide-details
              dark
              dense
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="itemHeaders"
            :items='filteredItems'
            :items-per-page="10"
            :search="search"
            class="elevation-1"
            dark
          >
          <template v-slot:top="{ pagination, options, updateOptions }">
            <v-data-footer
              :pagination="pagination"
              :options="options"
              @update:options="updateOptions"
              items-per-page-text="$vuetify.dataTable.itemsPerPageText"/>
          </template>
          <template v-slot:item.name="{ item }">
            <router-link :class="`router-link-${item.Quality}`" :to="`/item=${item.entry}/${item.name}`">{{ item.name }}</router-link>
          </template>
        </v-data-table>
        </v-card>
      </tab>
      <tab title="NPCs">
        <v-card dark>
          <v-card-title>
            NPCs
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Filter Results"
              hide-details
              dark
              dense
          ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="npcHeaders"
            :items='filteredCreatures'
            :items-per-page="10"
            :search="search"
            class="elevation-1"
            dark
          >
          <template v-slot:top="{ pagination, options, updateOptions }">
            <v-data-footer
              :pagination="pagination"
              :options="options"
              @update:options="updateOptions"
              items-per-page-text="$vuetify.dataTable.itemsPerPageText"/>
          </template>
          <template v-slot:item.Name="{ item }">
            <router-link class="npc" :to="`/npc=${item.Entry}/${item.Name}`">{{ item.Name }}</router-link>
          </template>
          </v-data-table>
        </v-card>
      </tab>
      <tab title="Quests">
        <v-card dark>
          <v-card-title>
            Quests
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Filter Results"
              hide-details
              dark
              dense
            ></v-text-field>
          </v-card-title>
          <v-data-table
          :headers="questHeaders"
          :items='filteredQuests'
          :items-per-page="10"
          :search="search"
          class="elevation-1"
          dark
          >
          <template v-slot:top="{ pagination, options, updateOptions }">
            <v-data-footer
              :pagination="pagination"
              :options="options"
              @update:options="updateOptions"
              items-per-page-text="$vuetify.dataTable.itemsPerPageText"/>
          </template>
          <template v-slot:item.Title="{ item }">
            <router-link class="quest" :to="`/quest=${item.entry}/${item.Title}`">{{ item.Title }}</router-link>
          </template>
          </v-data-table>
        </v-card>
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
      filteredItems: [],
      filteredCreatures: [],
      filteredQuests: [],
      search: '',
      questHeaders: [
        {
          text: 'Name',
          align: 'start',
          value: 'Title'
        },
      ],
      itemHeaders: [
        {
          text: 'Name',
          align: 'start',
          value: 'name'
        },
      ],
      npcHeaders: [
        {
          text: 'Name',
          align: 'start',
          value: 'Name'
        },
      ]
    }
  },
  methods: {
    getSearchResults() {
      axios.get(`http://localhost:3000/search?q=${this.$route.query.q}`)
        .then(response => {
          console.log(response.data)
          this.filteredItems = response.data.items;
          this.filteredCreatures = response.data.creatures;
          this.filteredQuests = response.data.quests;
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
.router-link-0, .router-link-0:link, .router-link-0:visited {
  color: #9d9d9d;
}
.router-link-1, .router-link-1:link, .router-link-1:visited {
  color: #ffffff
}
.router-link-2, .router-link-2:link, .router-link-2:visited {
  color: #1eff00
}
.router-link-3, .router-link-3:link, .router-link-3:visited {
  color: #0070dd
}
.router-link-4, .router-link-4:link, .router-link-4:visited {
  color: #a335ee
}
.router-link-5, .router-link-5:link, .router-link-5:visited {
  color: #ff8000
}
.router-link-6, .router-link-6:link, .router-link-6:visited {
  color: #e6cc80
}
.quest, .quest:link, .quest:visited, .npc, .npc:link, .npc:visited {
  color: #fdef2f;
}
</style>