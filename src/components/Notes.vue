<template>
  <div><h1>Original Patch Notes</h1>
  <br />
  <thead><h2>Patch 2.0: Before the Storm / The Burning Crusade</h2></thead>
    <v-simple-table dark dense class="notesTable">
      <tbody>
        <tr>
        <td
          v-for="(item, index) in notes_data.two_zero"
          :key="index"
          dark
          dense
          :to="item.link"
          style="text-align: center; font-size: 18px"
        >
        <template>
          <router-link :to="item.link">{{ item.title }}</router-link>
        </template>
        <v-col style="font-size: 15px">Released (US): {{ item.release }}</v-col>
        </td>
        </tr>
      </tbody>
    </v-simple-table>
    <br />
    <thead><h2>Patch 2.1: The Black Temple</h2></thead>
  </div>
</template>

<script>
const axios = require('axios')
var notes_data;

export default {
  name: 'Notes',
  data() {
    return {
      notes_data: {}
    }
  },
  mounted() {
    this.notes_data = require('../assets/notes_data.json')
  }
}
</script>

<style>
.notesTable tr:hover:not(.notesTable__expanded__content) {
  background: transparent !important;
}
</style>