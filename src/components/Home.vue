<template>
  <v-container fluid>
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
        <template v-slot:item.id="{ item }">
          <td>{{ item.title }}</td>
        </template>
      </v-data-table>
    </v-row>
  </v-container>
</template>

<script>
const axios = require('axios');

export default {
  name: 'Home',
  data() {
    return {
      bluePosts: [],
      headers: [
        {
          text: "Blizzard Posts",
          align: "start",
          value: "title"
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
        this.bluePosts = this.bluePosts.slice(0, 5)
    });
    },
    dateDifference(postDate) {
      const _MS_PER_DAY = 1000 * 60 * 60 * 24;

      const utc1 = Date.UTC(postDate.getFullYear(), postDate.getMonth(), postDate.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

      return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    },
    sortByDate(a, b) {
      return new Date(b.created).getTime() - new Date(a.created).getTime();
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
</style>