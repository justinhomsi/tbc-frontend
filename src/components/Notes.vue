<template>
  <div><h1>Original Patch Notes</h1>
    <v-simple-table dark dense class="notesTable">
      <thead>Patch 2.0</thead>
      <tbody>
        <tr>
        <td
          v-for="(item, index) in two_zero"
          :key="index"
          dark
          dense
          :to="item.link"
        >
        <template>
          <router-link :to="item.link">{{ item.title }}</router-link>
        </template>
        </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'Notes',
  data() {
    return {
      two_zero: [
        { title: '2.0.1', link: 'notes/original/2.0.1' },
        { title: '2.0.3', link: 'notes/original/2.0.3' },
        { title: '2.0.4', link: 'notes/original/2.0.4' },
        { title: '2.0.5', link: 'notes/original/2.0.5' },
        { title: '2.0.6', link: 'notes/original/2.0.6' },
        { title: '2.0.7', link: 'notes/original/2.0.7' },
        { title: '2.0.8', link: 'notes/original/2.0.8' },
        { title: '2.0.10', link: 'notes/original/2.0.10' },
        { title: '2.0.12', link: 'notes/original/2.0.12' }
      ]
    }
  },
  mounted() {
    
  }
}
</script>

<style>
.notesTable tr:hover:not(.notesTable__expanded__content) {
  background: transparent !important;
}
</style>