<template>
  <div class="notfound">
    <h1>404</h1>
    <h1>Page Not Found</h1>
    <br />
    <p><router-link :to="'/'">Return Home</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
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