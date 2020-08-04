<template>
  <div class="comingsoon">
    <VueTitle title="Untitled Project - Coming Soon"></VueTitle>
    <h1>Coming Soon!</h1>
    <p>This page is still in development, please check back soon.</p>
    <br />
    <p><router-link :to="'/'">Return Home</router-link></p>
  </div>
</template>

<script>
import VueTitle from './VueTitle.vue';
export default {
  name: 'ComingSoon',
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
.comingsoon {
  text-align: center;
  justify-content: center;
  padding: 30vh;
}
</style>