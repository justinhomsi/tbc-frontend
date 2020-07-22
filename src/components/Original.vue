<template>
  <p style="white-space: pre-wrap; color: darkgoldenrod" v-html="patchNotes">{{ this.patchNotes }}</p>
</template>

<script>
const axios = require('axios')

export default {
  name: 'Original',
  data() {
    return {
      patchNotes: ""
    }
  },
  methods: {
    getPatchNotes() {
      axios.get('/notes/original/2_0_1')
      .then(response => {
        this.patchNotes = response.data;
        console.log(this.patchNotes)
      })
    }
  },
  mounted() {
    this.getPatchNotes();
  }
}
</script>