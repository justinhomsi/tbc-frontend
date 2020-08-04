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
            :loading="isLoading"
          >
          <template v-slot:top="{ pagination, options, updateOptions }">
            <v-data-footer
              :pagination="pagination"
              :options="options"
              @update:options="updateOptions"
              items-per-page-text="$vuetify.dataTable.itemsPerPageText"/>
          </template>
          <template v-slot:item.name="{ item }">
            <router-link :class="`router-link-${item.Quality}`" :to="`/item=${item.entry}/${item.name}`">{{ item.name }} </router-link>
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
            :loading="isLoading"
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
          :loading="isLoading"
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
        {
          text: 'Quest Level',
          align: 'start',
          value: 'QuestLevel'
        },
        {
          text: 'Min. Level',
          align: 'start',
          value: 'MinLevel'
        }
      ],
      itemHeaders: [
        {
          text: 'Name',
          align: 'start',
          value: 'name'
        },
        {
          text: 'Item Level',
          align: 'start',
          value: 'ItemLevel'
        },
        {
          text: 'Req. Level',
          align: 'start',
          value: 'RequiredLevel'
        },
        {
          text: 'Type',
          align: 'start',
          value: 'class'
        },
      ],
      npcHeaders: [
        {
          text: 'Name',
          align: 'start',
          value: 'Name'
        },
        {
          text: 'Sub Name',
          align: 'start',
          value: 'SubName'
        },
      ],
      isLoading: true,
    }
  },
  methods: {
    getSearchResults() {
      this.isLoading = true;
      axios.get(`/search?q=${this.$route.query.q}`)
        .then(response => {
          this.filteredItems = response.data.items;
          this.filteredItems.forEach((el) => {el.class = this.determineItemType(el.class)})
          this.filteredCreatures = response.data.creatures;
          this.filteredQuests = response.data.quests;
          this.isLoading = false;
        })
    },
    determineItemType(itemType) {
      switch(itemType) {
        case 0:
          return 'Consumable'
          break
        case 1:
          return 'Container'
          break
        case 2:
          return 'Weapon'
          break
        case 3:
          return 'Gem'
          break
        case 4:
          return 'Armor'
          break
        case 5:
          return 'Reagent'
          break
        case 6:
          return 'Projectile'
          break
        case 7:
          return 'Tradeskill'
          break
        case 8:
          return 'Item Enhancement'
          break
        case 9:
          return 'Recipe'
          break
        case 11:
          return 'Quiver'
          break
        case 12:
          return 'Quest Item'
          break
        case 13:
          return 'Key'
          break
        case 15:
          return 'Miscellaneous'
          break
        case 16:
          return 'Glyph'
          break
        case 17:
          return 'Battle Pets'
          break
        case 18:
          return 'WoW Token'
          break
      }
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
a {
  text-decoration: none;
}
</style>