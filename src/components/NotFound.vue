<template>
  <div class="notfound">
    <VueTitle title="404 Not Found"></VueTitle>
    <h1>404</h1>
    <h1>Page Not Found</h1>
    <br />
    <p><router-link :to="'/'">Return Home</router-link></p>
  </div>
</template>

<script>
import VueTitle from './VueTitle.vue';

export default {
  name: 'NotFound',
  components: {
    VueTitle
  },
  data() {
    return {
    } 
  }
}
</script>

<style>
.notfound {
  text-align: center;
  justify-content: center;
  padding: 30vh;
}
</style>