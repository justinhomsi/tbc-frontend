<template>
  <div><h1>Original Patch Notes</h1>
    <br />
    <thead><h2>Patch 2.0: Before the Storm / The Burning Crusade</h2></thead>
      <NotesTable :data="notes_data.two_zero"></NotesTable>
    <br />
    <thead><h2>Patch 2.1: The Black Temple</h2></thead>
      <NotesTable :data="notes_data.two_one"></NotesTable>
    <br />
    <thead><h2>Patch 2.2: Voice Chat!</h2></thead>
      <NotesTable :data="notes_data.two_two"></NotesTable>
    <br />
    <thead><h2>Patch 2.3: The Gods of Zul'Aman</h2></thead>
      <NotesTable :data="notes_data.two_three"></NotesTable>
    <br />
    <thead><h2>Patch 2.4: Fury of the Sunwelln</h2></thead>
      <NotesTable :data="notes_data.two_four"></NotesTable>
  </div>
</template>

<script>
import NotesTable from './NotesTable.vue';
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
  },
  components: {
    NotesTable
  }
}
</script>

<style>
.notesTable tr:hover:not(.notesTable__expanded__content) {
  background: transparent !important;
}
</style>