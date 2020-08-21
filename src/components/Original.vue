<template>
  <p style="white-space: pre-wrap; color: darkgoldenrod" v-html="patchNotes">{{ this.patchNotes }}</p>
</template>

<script>
const axios = require('axios')

export default {
  name: 'Original',
  data() {
    return {
      patchNotes: "",
    }
  },
  methods: {
    // Retrieves patch notes from backend using route parameters
    getPatchNotes() {
      axios.get(`/notes/original/${this.$route.params.version}`)
      .then(response => {
        this.patchNotes = response.data;
      })
    }
  },
  mounted() {
    this.getPatchNotes();
  }
}
</script>