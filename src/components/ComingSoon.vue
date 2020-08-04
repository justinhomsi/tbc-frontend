<template>
  <div class="comingsoon">
    <h1>Coming Soon!</h1>
    <p>This page is still in development, please check back soon.</p>
    <br />
    <p><router-link :to="'/'">Return Home</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon',
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